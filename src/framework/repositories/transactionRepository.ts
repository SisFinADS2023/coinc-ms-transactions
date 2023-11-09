import { inject, injectable } from "inversify"

import { TransactionModel } from "../models/transactionModel"
import { ITransactionEntity } from "../../domain/entities/transactionEntity"
import { ITransactionRepository } from "../../business/repositories/iTransactionRepository"
import { InputListTransactionsDto } from '../../business/dto/transactions/listTransactionsDto'

@injectable()
export class TransactionRepository implements ITransactionRepository {
  public constructor(@inject(TransactionModel) private transactionModel: typeof TransactionModel) { }

  async create(transactionEntity: ITransactionEntity): Promise<ITransactionEntity> {
    let createResponse = await this.transactionModel.create({
      _id: transactionEntity.transactionId,
      bankAccountId: transactionEntity.bankAccountId,
      userId: transactionEntity.userId,
      name: transactionEntity.name,
      valueCents: transactionEntity.valueCents,
      categories: transactionEntity.categories,
      date: transactionEntity.date,
      createdAt: transactionEntity.createdAt,
      updatedAt: transactionEntity.updatedAt
    })

    createResponse = await createResponse.populate({
      path: 'categories',
      select: 'id name icon color'
    })

    console.log('create::response => ', createResponse)

    const createTransactionReturn = {
      _id: String(createResponse._id),
      bankAccountId: transactionEntity.bankAccountId,
      userId: transactionEntity.userId,
      name: transactionEntity.name,
      valueCents: transactionEntity.valueCents,
      categories: createResponse.categories,
      date: createResponse.date,
      createdAt: createResponse.createdAt,
      updatedAt: createResponse.updatedAt
    }

    return createTransactionReturn
  }

  async get(transactionId: string): Promise<ITransactionEntity> {
    const getResponse = await this.transactionModel.findById({ _id: transactionId }).populate({
      path: 'categories',
      select: 'id name icon color'
    }).select('-__v')

    console.log('get::response => ', getResponse)

    return getResponse as ITransactionEntity
  }

  async delete(transactionId: String): Promise<boolean> {
    const deleteResponse = await this.transactionModel.deleteOne({
      _id: transactionId
    }).select('-__v')

    console.log('delete::response => ', deleteResponse.deletedCount)
    if (deleteResponse.deletedCount == 1) {
      return true
    }
    return false
  }

  async list(props: InputListTransactionsDto): Promise<ITransactionEntity[]> {
    let query = null

    if (props.startDate && props.endDate) {
      query = {
        date: {
          $gte: new Date(props.startDate),
          $lte: new Date(props.endDate)
        }
      }
    }

    if (props.type) {
      query = {
        ...query,
        valueCents: props.type === 'credit' ? { $gte: 0 } : { $lt: 0 }
      }
    }

    const getResponse = await this.transactionModel.find({
      userId: props.userId,
      ...query
    }, null, {
      skip: props.perPage * (props.page - 1),
      limit: props.perPage,
      sort: {
        createdAt: props.orderBy ?? 'desc'
      }
    })
      .populate({
        path: 'categories',
        select: 'id name icon color'
      })
      .select("-__v")

    return getResponse as ITransactionEntity[]
  }
}
