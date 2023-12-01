import { injectable, inject } from 'inversify'

import { left, right } from '../../../framework/shared/either'
import { AbstractOperator } from '../abstractOperator'
import { UpdateScheduleUseCase } from '../../../business/useCases/schedules/updateScheduleUseCase'
import { InputUpdateSchedule, OutputUpdateSchedule } from '../../serializers/schedules/inputUpdateSchedule'

@injectable()
export class UpdateScheduleOperator extends AbstractOperator<InputUpdateSchedule, OutputUpdateSchedule> {
    public constructor(@inject(UpdateScheduleUseCase) private updateScheduleUseCase: UpdateScheduleUseCase) {
        super()
    }

    protected async run(input: InputUpdateSchedule): Promise<OutputUpdateSchedule> {
        const result = await this.updateScheduleUseCase.exec(input)

        if (result.isLeft()) {
            return left(result.value)
        }

        return right(result.value)
    }
}