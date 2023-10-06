import { ICategoryEntity } from "../../domain/entities/categoryEntity";

export const ICategoryRepositoryToken = Symbol.for('ICategoryRepository')

export interface ICategoryRepository {
    validate(categories: [String]): Promise<boolean>
    create(categoryEntity: ICategoryEntity): Promise<ICategoryEntity>
}