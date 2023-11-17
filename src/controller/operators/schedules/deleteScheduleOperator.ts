import { injectable, inject } from 'inversify'
import { DeleteScheduleUseCase } from '../../../business/useCases/schedules/deleteScheduleUseCase'
import { left, right } from '../../../framework/shared/either'
import { InputDeleteSchedule, OutputDeleteSchedule } from '../../serializers/schedules/inputDeleteSchedule'
import { AbstractOperator } from '../abstractOperator'

@injectable()
export class DeleteScheduleOperator extends AbstractOperator<InputDeleteSchedule, OutputDeleteSchedule> {
    public constructor(@inject(DeleteScheduleUseCase) private deleteScheduleUseCase: DeleteScheduleUseCase) {
        super()
    }

    protected async run(input: InputDeleteSchedule): Promise<OutputDeleteSchedule> {
        const result = await this.deleteScheduleUseCase.exec(input)

        if (result.isLeft()) {
            return left(result.value)
        }

        return right(result.value)
    }
}