import { ICategoryEntity } from "../../domain/entities/categoryEntity";
import { Either } from "../../framework/shared/either";
import { IError } from "../../framework/shared/iError";

export enum OrderByTypes {
  ASC = 'asc',
  DESC = 'desc'
}

export interface InputListCategoriesDto {
  userId: string
  page: number
  perPage: number
  orderBy?: OrderByTypes
}

export type OutputListCategoriesDto = Either<IError, ICategoryEntity[]>