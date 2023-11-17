import { IsIn, IsMongoId, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'

import { Validatable } from '../abstractValidatable'
import { Either } from '../../../framework/shared/either'
import { IError } from '../../../framework/shared/iError'
import { OrderByTypes } from '../../../business/dto/listCategoriesDto'
import { ICategoryEntity } from '../../../domain/entities/categoryEntity'

export class InputListCategories extends Validatable<InputListCategories> {
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
    @IsIn(Object.values(OrderByTypes))
    orderBy!: OrderByTypes
  }
  
  export type OutputListCategories = Either<IError, ICategoryEntity[]>