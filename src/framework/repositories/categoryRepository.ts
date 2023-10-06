import   '../utility/database'

import { inject, injectable } from "inversify"
import { CategoryModel } from '../models/categoryModel'
import { ICategoryRepository } from '../../business/repositories/iCategoryRepository'
import { ICategoryEntity } from '../../domain/entities/categoryEntity'


@injectable()
export class CategoryRepository implements ICategoryRepository {
  public constructor(@inject(CategoryModel) private categoryModel: typeof CategoryModel) {}

  async create(categoryEntity: ICategoryEntity): Promise<ICategoryEntity> {
    const createResponse = await this.categoryModel.create({
      _id: categoryEntity.categoryId,
      userId: categoryEntity.userId,
      name: categoryEntity.name,
      icon: categoryEntity.icon,
      color: categoryEntity.color,
      createdAt: categoryEntity.createdAt,
      updatedAt: categoryEntity.updatedAt
    })

    console.log('create::response => ', createResponse)

    const createCategoryReturn = {
      _id: String(createResponse._id),
      userId: categoryEntity.userId,
      name: categoryEntity.name,
      icon: categoryEntity.icon,
      color: categoryEntity.color,
      createdAt: createResponse.createdAt,
      updatedAt: createResponse.updatedAt
    }

    return createCategoryReturn
  }
}
