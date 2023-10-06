import { IsDate, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

import { ITransactionEntity } from '../../domain/entities/transactionEntity'
import { Either } from '../../framework/shared/either'
import { IError } from '../../framework/shared/iError'
import { Validatable } from './abstractValidatable'

export class InputCreateTransaction extends Validatable<InputCreateTransaction> {
  @IsNotEmpty()
  @IsMongoId()
  userId!: string

  @IsNotEmpty()
  @IsString()
  name!: string

  @IsNotEmpty()
  @IsNumber()
  valueCents!: Number

  @IsOptional()
  @IsMongoId({ each : true })
  categories?: [string]

  @IsOptional()
  @IsDate()
  date?: Date
}

export type OutputCreateTransaction = Either<IError, ITransactionEntity>
