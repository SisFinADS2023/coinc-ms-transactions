import { injectable, inject } from 'inversify'

import { GetScheduleUseCase } from '../../../business/useCases/schedules/getScheduleUseCase'
import { left, right } from '../../../framework/shared/either'
import { InputGetSchedule, OutputGetSchedule } from '../../serializers/schedules/inputGetSchedule'
import { AbstractOperator } from '../abstractOperator'

@injectable()
export class GetScheduleOperator extends AbstractOperator<InputGetSchedule, OutputGetSchedule> {
    public constructor(@inject(GetScheduleUseCase) private getScheduleUseCase: GetScheduleUseCase) {
        super()
    }

    protected async run(input: InputGetSchedule): Promise<OutputGetSchedule> {
        const result = await this.getScheduleUseCase.exec(input)

        if (result.isLeft()) {
            return left(result.value)
        }

        return right(result.value)
    }
}