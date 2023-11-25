import { injectable, inject } from 'inversify'

import { IScheduleRepository, IScheduleRepositoryToken } from '../../repositories/iScheduleRepository'
import { ITransactionRepository, ITransactionRepositoryToken } from '../../repositories/iTransactionRepository'
import { SchedulesTriggerFailed } from '../../module/errors/schedules'

@injectable()
export class TriggerSchedulesUseCase {
  public constructor(
    @inject(IScheduleRepositoryToken) private scheduleRepository: IScheduleRepository,
    @inject(ITransactionRepositoryToken) private transactionRepository: ITransactionRepository
  ) {}

  async exec(): Promise<void> {
    try {
      const today = new Date(Date.now())
      const scheduleResult = await this.scheduleRepository.listAll(today)
      console.log('schedule => ', scheduleResult)
    } catch (error) {
      console.log(SchedulesTriggerFailed.message)
    }
  }
}
