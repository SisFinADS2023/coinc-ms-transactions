import { IsNotEmpty, IsHexColor, IsOptional, IsString } from 'class-validator'

import { ICategoryEntity } from '../../domain/entities/categoryEntity'
import { Either } from '../../framework/shared/either'
import { IError } from '../../framework/shared/iError'
import { Validatable } from './abstractValidatable'

export class InputUpdateCategory extends Validatable<InputUpdateCategory> {
    @IsNotEmpty()
    @IsString()
    categoryId!: string

    @IsOptional()
    @IsString()
    name!: string

    @IsOptional()
    @IsString()
    icon!: string

    @IsOptional()
    @IsHexColor()
    color!: string
}

export type OutputUpdateCategory = Either<IError, ICategoryEntity>