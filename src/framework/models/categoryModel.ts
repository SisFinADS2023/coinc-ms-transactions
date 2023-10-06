import { Schema, model, Model } from "mongoose"
import { ICategoryEntity } from "../../domain/entities/categoryEntity"

const categorySchema = new Schema<ICategoryEntity> (
  {
    userId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false
    },
    createdAt: {},
    updatedAt: {}
  },
  {
    timestamps: true
  }
)

export const CategoryModel: Model<ICategoryEntity> = model<ICategoryEntity>('Categories', categorySchema)
