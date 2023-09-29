import { IsNotEmpty, IsUUID } from 'class-validator'
import { ITransactionEntity } from '../../domain/entities/transactionEntity'

import { Either } from '../../framework/shared/either'
import { IError } from '../../framework/shared/iError'
import { Validatable } from './abstractValidatable'

export class InputGetTransaction extends Validatable<InputGetTransaction> {
  @IsNotEmpty()
  @IsUUID()
  transactionId!: string
}

export type OutputGetTransaction = Either<IError, ITransactionEntity>