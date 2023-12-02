import { injectable, inject } from 'inversify'

import { TriggerSchedulesUseCase } from '../../../business/useCases/schedules/triggerSchedulesUseCase'

@injectable()
export class TriggerSchedulesOperator {
  public constructor(@inject(TriggerSchedulesUseCase) private triggerSchedulesUseCase: TriggerSchedulesUseCase) {}

  async exec(): Promise<void> {
    await this.triggerSchedulesUseCase.exec()
  }
}
