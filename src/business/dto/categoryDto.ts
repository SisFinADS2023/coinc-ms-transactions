import { ICategoryEntity } from "../../domain/entities/categoryEntity"
import { Either } from "../../framework/shared/either"
import { IError } from "../../framework/shared/iError"

export interface InputCreateCategoryDto {
  userId: string
  name: string
  icon: string
  color: string
}

export type OutputCreateCategoryDto = Either<IError, ICategoryEntity>
