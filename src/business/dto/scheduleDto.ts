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

export interface InputGetScheduleDto {
  scheduleId: string
}

export interface InputDeleteScheduleDto {
  scheduleId: string
}

export interface InputUpdateScheduleDto {
  scheduleId: string
  transaction?: {
    bankAccountId?: string
    name?: string
    valueCents?: Number
    categories?: [string]
  }
  quantity?: Number
  interval?: Number
  startDate?: Date
}

export type OutputCreateScheduleDto = Either<IError, IScheduleEntity>
export type OutputGetScheduleDto = Either<IError, IScheduleEntity>
export type OutputDeleteScheduleDto = Either<IError, boolean>
export type OutputUpdateScheduleDto = Either<IError, IScheduleEntity>
