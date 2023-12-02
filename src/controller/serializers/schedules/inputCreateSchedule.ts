import { Type } from 'class-transformer'
import { IsDate, IsIn, IsInt, IsMongoId, IsNotEmpty, IsNotEmptyObject, IsNumber, IsObject, IsOptional, IsPositive, IsString, ValidateNested } from 'class-validator'

import { IntervalTypes, IScheduleEntity } from '../../../domain/entities/scheduleEntity'
import { Either } from '../../../framework/shared/either'
import { IError } from '../../../framework/shared/iError'
import { Validatable } from '../abstractValidatable'

class Transaction {
  @IsOptional()
  @IsMongoId()
  bankAccountId?: string

  @IsNotEmpty()
  @IsString()
  name!: string

  @IsNotEmpty()
  @IsNumber()
  valueCents!: Number

  @IsOptional()
  @IsMongoId({ each : true })
  categories?: [string]
}

export class InputCreateSchedule extends Validatable<InputCreateSchedule> {
  @IsNotEmpty()
  @IsMongoId()
  userId!: string

  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Transaction)
  transaction!: Transaction

  @IsOptional()
  @IsNumber()
  @IsInt()
  @IsPositive()
  quantity?: Number

  @IsNotEmpty()
  @IsIn(Object.values(IntervalTypes))
  interval?: IntervalTypes

  @IsOptional()
  @IsDate()
  startDate?: Date
}

export type OutputCreateSchedule = Either<IError, IScheduleEntity>
