import { IsMongoId, IsNotEmpty } from 'class-validator'

import { Either } from '../../../framework/shared/either'
import { IError } from '../../../framework/shared/iError'
import { Validatable } from '../abstractValidatable'

export class InputDeleteTransaction extends Validatable<InputDeleteTransaction> {
  @IsNotEmpty()
  @IsMongoId()
  transactionId!: string
}

export type OutputDeleteTransaction = Either<IError, boolean>
