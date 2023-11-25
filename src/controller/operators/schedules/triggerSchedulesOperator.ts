import { injectable, inject } from 'inversify'

import { TriggerSchedulesUseCase } from '../../../business/useCases/schedules/triggerSchedulesUseCase'

@injectable()
export class TriggerSchedulesOperator {
  public constructor(@inject(TriggerSchedulesUseCase) private triggerSchedulesUseCase: TriggerSchedulesUseCase) {}

  async exec(): Promise<void> {
    const result = await this.triggerSchedulesUseCase.exec()
    console.log('triggerScheduleOperatorResult => ', result)
  }
}
