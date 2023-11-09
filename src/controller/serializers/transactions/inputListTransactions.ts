import { IsDateString, IsIn, IsMongoId, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'

import { Validatable } from '../abstractValidatable'
import { Either } from '../../../framework/shared/either'
import { IError } from '../../../framework/shared/iError'
import { OrderByTypes, TransactionTypes } from '../../../business/dto/transactions/listTransactionsDto'
import { ITransactionEntity } from '../../../domain/entities/transactionEntity'

export class InputListTransactions extends Validatable<InputListTransactions> {
  @IsNotEmpty()
  @IsMongoId()
  userId!: string

  @IsNotEmpty()
  @IsNumber()
  page!: number

  @IsNotEmpty()
  @IsNumber()
  perPage!: number

  @IsOptional()
  @IsIn(Object.values(TransactionTypes))
  type?: TransactionTypes

  @IsOptional()
  @IsMongoId()
  categoryId?: string

  @IsOptional()
  @IsIn(Object.values(OrderByTypes))
  orderBy!: OrderByTypes

  @IsOptional()
  @IsDateString()
  startDate?: string

  @IsOptional()
  @IsDateString()
  endDate?: string
}

export type OutputListTransactions = Either<IError, ITransactionEntity[]>
