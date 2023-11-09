import { ITransactionEntity } from "../../../domain/entities/transactionEntity"
import { Either } from "../../../framework/shared/either"
import { IError } from "../../../framework/shared/iError"

export enum OrderByTypes {
  ASC = 'asc',
  DESC = 'desc'
}

export enum TransactionTypes {
  CREDIT = 'credit',
  DEBIT = 'debit'
}

export interface InputListTransactionsDto {
  userId: string
  page: number
  perPage: number
  type?: TransactionTypes
  categoryId?: string
  orderBy?: OrderByTypes
  startDate?: string
  endDate?: string
}

export type OutputListTransactionsDto = Either<IError, ITransactionEntity[]>
