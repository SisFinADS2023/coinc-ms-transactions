import { IsHexColor, IsMongoId, IsNotEmpty, IsString } from 'class-validator'

import { ICategoryEntity } from '../../domain/entities/categoryEntity'
import { Either } from '../../framework/shared/either'
import { IError } from '../../framework/shared/iError'
import { Validatable } from './abstractValidatable'

export class InputCreateCategory extends Validatable<InputCreateCategory> {
  @IsNotEmpty()
  @IsMongoId()
  userId!: string

  @IsNotEmpty()
  @IsString()
  name!: string

  @IsNotEmpty()
  @IsString()
  icon!: string

  @IsNotEmpty()
  @IsHexColor()
  color!: string
}

export type OutputCreateCategory = Either<IError, ICategoryEntity>
