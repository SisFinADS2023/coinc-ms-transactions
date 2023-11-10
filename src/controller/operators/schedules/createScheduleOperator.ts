import { injectable, inject } from 'inversify'

import { left, right } from '../../../framework/shared/either'
import { AbstractOperator } from '../abstractOperator'
import { CreateScheduleUseCase } from '../../../business/useCases/schedules/createScheduleUseCase'
import { InputCreateSchedule, OutputCreateSchedule } from '../../serializers/schedules/inputCreateSchedule'

@injectable()
export class CreateScheduleOperator extends AbstractOperator<InputCreateSchedule, OutputCreateSchedule> {
  public constructor(@inject(CreateScheduleUseCase) private createScheduleUseCase: CreateScheduleUseCase) {
    super()
  }

  protected async run(input: InputCreateSchedule): Promise<OutputCreateSchedule> {
    const result = await this.createScheduleUseCase.exec(input)

    if (result.isLeft()) {
      return left(result.value)
    }

    return right(result.value)
  }
}
