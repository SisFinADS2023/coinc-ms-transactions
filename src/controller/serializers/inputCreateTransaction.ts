import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, isUUID, IsUUID } from 'class-validator'

import { ITransactionEntity } from '../../domain/entities/transactionEntity'
import { Either } from '../../framework/shared/either'
import { IError } from '../../framework/shared/iError'
import { Validatable } from './abstractValidatable'

export class InputCreateTransaction extends Validatable<InputCreateTransaction> {
  @IsNotEmpty()
  @IsUUID()
  userId!: string

  @IsNotEmpty()
  @IsString()
  name!: string

  @IsNotEmpty()
  @IsNumber()
  valueCents!: bigint

  @IsOptional()
  @IsUUID()
  categoryId!: bigint

  @IsOptional()
  @IsDate()
  date!: string
}

export type OutputCreateTransaction = Either<IError, ITransactionEntity>
