import { Schema, model, Model } from "mongoose"
import { IScheduleEntity } from "../../domain/entities/scheduleEntity"

const scheduleSchema = new Schema<IScheduleEntity> (
  {
    userId: {
      type: String,
      required: true
    },
    transaction: {
      bankAccountId: {
        type: String,
        required: false
      },
      name: {
        type: String,
        required: true
      },
      valueCents: {
        type: Number,
        required: true
      },
      categories: [{
        type: String,
        ref: 'Categories',
        required: false
      }]
    },
    interval: {
      type: Number,
      required: true
    },
    startDate: {
      type: Date,
      required: true,
      default: Date.now()
    },
    createdAt: {},
    updatedAt: {}
  },
  {
    timestamps: true
  }
)

export const ScheduleModel: Model<IScheduleEntity> = model<IScheduleEntity>('Schedules', scheduleSchema)
