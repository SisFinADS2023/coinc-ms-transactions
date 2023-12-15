import { IsMongoId, IsNotEmpty } from 'class-validator'

import { IScheduleEntity } from '../../../domain/entities/scheduleEntity'
import { Either } from '../../../framework/shared/either'
import { IError } from '../../../framework/shared/iError'
import { Validatable } from '../abstractValidatable'

export class InputGetSchedule extends Validatable<InputGetSchedule> {
    @IsNotEmpty()
    @IsMongoId()
    scheduleId!: string
}

export type OutputGetSchedule = Either<IError, IScheduleEntity>