import { Type } from 'class-transformer'
import { IsDate, IsMongoId, IsNotEmpty, IsNotEmptyObject, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator'

import { IScheduleEntity } from '../../../domain/entities/scheduleEntity'
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
  quantity?: Number

  @IsNotEmpty()
  @IsNumber()
  interval!: Number

  @IsOptional()
  @IsDate()
  startDate?: Date
}

export type OutputCreateSchedule = Either<IError, IScheduleEntity>
