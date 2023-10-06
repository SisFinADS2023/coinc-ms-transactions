import { IsDate, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, isUUID, IsUUID } from 'class-validator'

import { Either } from '../../framework/shared/either'
import { IError } from '../../framework/shared/iError'
import { Validatable } from './abstractValidatable'

export class InputDeleteCategory extends Validatable<InputDeleteCategory> {
  @IsNotEmpty()
  @IsMongoId()
  categoryId!: string
}

export type OutputDeleteCategory = Either<IError, boolean>