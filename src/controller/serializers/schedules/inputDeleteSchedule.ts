import { IsMongoId, IsNotEmpty } from 'class-validator'

import { Either } from '../../../framework/shared/either'
import { IError } from '../../../framework/shared/iError'
import { Validatable } from '../abstractValidatable'

export class InputDeleteSchedule extends Validatable<InputDeleteSchedule> {
    @IsNotEmpty()
    @IsMongoId()
    scheduleId!: string
}

export type OutputDeleteSchedule = Either<IError, boolean>