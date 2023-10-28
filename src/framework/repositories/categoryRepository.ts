import   '../utility/database'

import { inject, injectable } from "inversify"
import { CategoryModel } from '../models/categoryModel'
import { ICategoryRepository } from '../../business/repositories/iCategoryRepository'
import { ICategoryEntity } from '../../domain/entities/categoryEntity'

@injectable()
export class CategoryRepository implements ICategoryRepository {
  public constructor(@inject(CategoryModel) private categoryModel: typeof CategoryModel) {}

  async validate(categories: [String]): Promise<boolean> {
    const categoriesExist = await this.categoryModel.countDocuments({_id: categories})
    console.log("categories::exist => ", categoriesExist)

    if (categoriesExist == categories.length) return true
    return false
  }

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

  async delete(categoryId: String): Promise<boolean> {
    const deleteResponse = await this.categoryModel.deleteOne({
      _id: categoryId
    })

    console.log('delete::response => ', deleteResponse.deletedCount)
    if (deleteResponse.deletedCount == 1){
      return true
    }
    return false
  }
}
