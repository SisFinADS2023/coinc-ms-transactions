import { ITransactionEntity } from "../../domain/entities/transactionEntity"

export const ITransactionRepositoryToken = Symbol.for('ITransactionRepository')

export interface ITransactionRepository {
  create(transactionEntity: ITransactionEntity): Promise<ITransactionEntity>
}
