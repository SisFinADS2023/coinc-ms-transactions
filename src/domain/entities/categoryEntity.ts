import { AbstractEntity } from './abstractEntity'

export interface ICategoryEntity {
  categoryId?: string
  userId: string
  name: string
  icon: string
  color: string
  createdAt?: Date
  updatedAt?: Date
}

export interface IUpdateCategoryEntity {
  categoryId: string
  name?: string
  icon?: string
  color?: string
}

export class CategoryEntity extends AbstractEntity<ICategoryEntity> {}
export class UpdateCategoryEntity extends AbstractEntity<IUpdateCategoryEntity> {}
