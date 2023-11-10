import { ITransactionEntity } from "../../domain/entities/transactionEntity"
import { Either } from "../../framework/shared/either"
import { IError } from "../../framework/shared/iError"

export interface InputCreateTransactionDto {
  bankAccountId?: string
  userId: string
  name: string
  valueCents: Number
  categories?: [string]
  date?: Date
}

export interface InputGetTransactionDto {
  transactionId: string
}

export interface InputDeleteTransactionDto {
  transactionId: string
}

export type OutputCreateTransactionDto = Either<IError, ITransactionEntity>
export type OutputDeleteTransactionDto = Either<IError, boolean>
export type OutputGetTransactionDto = Either<IError, ITransactionEntity>
