import { inject, injectable } from "inversify"

import { TransactionModel } from "../models/transactionModel"
import { ITransactionEntity } from "../../domain/entities/transactionEntity"
import { ITransactionRepository } from "../../business/repositories/iTransactionRepository"

@injectable()
export class TransactionRepository implements ITransactionRepository {
  public constructor(@inject(TransactionModel) private transactionModel: typeof TransactionModel) {}

  async create(transactionEntity: ITransactionEntity): Promise<ITransactionEntity> {
    const createResponse = await this.transactionModel.create({
      _id: transactionEntity._id,
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
      _id: String(createResponse._id),
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
}
