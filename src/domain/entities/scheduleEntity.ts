import { AbstractEntity } from './abstractEntity'

export interface IScheduleEntity {
  scheduleId?: string
  userId: string
  transaction: {
    bankAccountId?: string
    name: string
    valueCents: Number
    categories?: [string]
  }
  quantity?: Number
  interval: Number
  startDate?: Date
  createdAt?: Date
  updatedAt?: Date
}

export class ScheduleEntity extends AbstractEntity<IScheduleEntity> {}
