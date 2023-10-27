import { ITransactionEntity } from "../../domain/entities/transactionEntity"
import { InputListTransactionsDto } from "../dto/transactions/listTransactionsDto"

export const ITransactionRepositoryToken = Symbol.for('ITransactionRepository')

export interface ITransactionRepository {
  create(transactionEntity: ITransactionEntity): Promise<ITransactionEntity>
  delete(transactionId: string): Promise<boolean>
  list(props: InputListTransactionsDto): Promise<ITransactionEntity[]>
  get(transactionId: string): Promise<ITransactionEntity>
}
