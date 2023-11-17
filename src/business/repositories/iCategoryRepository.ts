import { ICategoryEntity } from "../../domain/entities/categoryEntity";
import { InputListCategoriesDto } from "../dto/listCategoriesDto";

export const ICategoryRepositoryToken = Symbol.for('ICategoryRepository')

export interface ICategoryRepository {
  validate(categories: [String]): Promise<boolean>
  create(categoryEntity: ICategoryEntity): Promise<ICategoryEntity>
  delete(categoryId: string): Promise<boolean>
  update(categoryEntity: Partial<ICategoryEntity>): Promise<ICategoryEntity>
  list(props: InputListCategoriesDto): Promise<ICategoryEntity[]>
}
