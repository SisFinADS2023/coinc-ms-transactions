import { Type } from 'class-transformer'
import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, IsObject, ValidateNested, IsNotEmptyObject, IsDate } from 'class-validator'

import { IScheduleEntity } from '../../../domain/entities/scheduleEntity'
import { Either } from '../../../framework/shared/either'
import { IError } from '../../../framework/shared/iError'
import { Validatable } from '../abstractValidatable'

class Transaction {
    @IsOptional()
    @IsString()
    bankAccountId?: string

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsNumber()
    valueCents?: Number

    @IsOptional()
    @IsMongoId({ each : true})
    categories?: [string]
}

export class InputUpdateSchedule extends Validatable<InputUpdateSchedule> {
    @IsNotEmpty()
    @IsString()
    scheduleId!: string

    @IsOptional()
    @IsObject()
    @IsNotEmptyObject()
    @ValidateNested({ each: true })
    @Type(() => Transaction)
    transaction?: Transaction

    @IsOptional()
    @IsNumber()
    quantity?: Number

    @IsOptional()
    @IsNumber()
    interval?: Number

    @IsOptional()
    @IsDate()
    startDate?: Date
}

export type OutputUpdateSchedule = Either<IError, IScheduleEntity>