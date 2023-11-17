import { IScheduleEntity } from "../../domain/entities/scheduleEntity"
import { Either } from "../../framework/shared/either"
import { IError } from "../../framework/shared/iError"

export interface InputCreateScheduleDto {
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
}

export interface InputDeleteScheduleDto {
  scheduleId: string
}

export type OutputCreateScheduleDto = Either<IError, IScheduleEntity>
export type OutputDeleteScheduleDto = Either<IError, boolean>
