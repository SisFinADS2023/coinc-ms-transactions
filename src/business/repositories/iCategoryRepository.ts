import { ICategoryEntity } from "../../domain/entities/categoryEntity";

export const ICategoryRepositoryToken = Symbol.for('ICategoryRepository')

export interface ICategoryRepository {
    create(categoryEntity: ICategoryEntity): Promise<ICategoryEntity>
    delete(categoryId: string): Promise<boolean>
}
