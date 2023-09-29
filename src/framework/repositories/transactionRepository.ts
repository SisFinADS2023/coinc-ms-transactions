import { inject, injectable } from "inversify"

import { TransactionModel } from "../models/transactionModel"
import { ITransactionEntity } from "../../domain/entities/transactionEntity"
import { ITransactionRepository } from "../../business/repositories/iTransactionRepository"

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

  async get(id: string): Promise<ITransactionEntity> {
    const getResponse = await this.transactionModel.findOne({ transactionId: id })
    console.log('get::response => ', getResponse)

    const getTransactionReturn = {
      transactionId: id,
      userId: String(getResponse?.userId),
      name: String(getResponse?.name),
      valueCents: Number(getResponse?.valueCents),
      categoryId: getResponse?.categoryId || undefined,
      date: getResponse?.date,
      createdAt: getResponse?.createdAt,
      updatedAt: getResponse?.updatedAt
    }

    return getTransactionReturn
  }
}
