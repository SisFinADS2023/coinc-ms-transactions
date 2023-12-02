import { AbstractEntity } from './abstractEntity'

export enum IntervalTypes {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
}

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
  interval: IntervalTypes
  startDate?: Date
  createdAt?: Date
  updatedAt?: Date
}

export class ScheduleEntity extends AbstractEntity<IScheduleEntity> {}
