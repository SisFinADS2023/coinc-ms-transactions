import { inject, injectable } from "inversify"

import { TransactionModel } from "../models/transactionModel"
import { ITransactionEntity } from "../../domain/entities/transactionEntity"
import { ITransactionRepository } from "../../business/repositories/iTransactionRepository"
import { IGetTransactionEntity } from "../../domain/entities/GetTransactionEntity"

@injectable()
export class TransactionRepository implements ITransactionRepository {
  public constructor(@inject(TransactionModel) private transactionModel: typeof TransactionModel) {}

  async create(transactionEntity: ITransactionEntity): Promise<ITransactionEntity> {
    const createResponse = await this.transactionModel.create({
      transactionId: transactionEntity.transactionId,
      userId: transactionEntity.userId,
      name: transactionEntity.name,
      valueCents: transactionEntity.valueCents,
      categoryId: transactionEntity.categoryId,
      date: transactionEntity.date,
      createdAt: transactionEntity.createdAt,
      updatedAt: transactionEntity.updatedAt
    })
    
    console.log('create::response => ', createResponse)

    const createTransactionReturn = {
      transactionId: transactionEntity.transactionId,
      userId: transactionEntity.userId,
      name: transactionEntity.name,
      valueCents: transactionEntity.valueCents,
      categoryId: transactionEntity.categoryId,
      date: createResponse.date,
      createdAt: createResponse.createdAt,
      updatedAt: createResponse.updatedAt
    }
    
    return createTransactionReturn
  }

  async get(id: string): Promise<IGetTransactionEntity> {
    const getResponse = await this.transactionModel.findOne({ transactionId: id })
    console.log('get::response => ', getResponse)

    const getTransactionReturn = {
      transactionId: id,
      userId: getResponse?.userId,
      name: getResponse?.name,
      valueCents: getResponse?.valueCents,
      categoryId: getResponse?.categoryId,
      date: getResponse?.date,
      createdAt: getResponse?.createdAt,
      updatedAt: getResponse?.updatedAt
    }

    return getTransactionReturn
  }
}
