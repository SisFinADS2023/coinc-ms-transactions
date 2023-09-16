import { ITransactionEntity } from "../../domain/entities/transactionEntity"
import { Either } from "../../framework/shared/either"
import { IError } from "../../framework/shared/iError"

export interface InputCreateTransactionDto {
  userId: string
  name: string
  valueCents: bigint
  categoryId?: string
  date?: Date
}

export type OutputCreateTransactionDto = Either<IError, ITransactionEntity>
