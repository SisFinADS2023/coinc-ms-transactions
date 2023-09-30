import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, isUUID, IsUUID } from 'class-validator'

import { Either } from '../../framework/shared/either'
import { IError } from '../../framework/shared/iError'
import { Validatable } from './abstractValidatable'

export class InputDeleteTransaction extends Validatable<InputDeleteTransaction> {
  @IsNotEmpty()
  @IsUUID()
  transactionId!: string
}

export type OutputDeleteTransaction = Either<IError, boolean>
