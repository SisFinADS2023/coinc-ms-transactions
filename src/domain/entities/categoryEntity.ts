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

export class CategoryEntity extends AbstractEntity<ICategoryEntity> {}