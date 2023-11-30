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

      for (let i = 0; i < scheduleResult.length; i++) {
        let transactionResult = await this.transactionRepository.create({
          bankAccountId: scheduleResult[i]?.transaction.bankAccountId,
          userId: scheduleResult[i]?.userId!,
          name: scheduleResult[i]?.transaction.name!,
          valueCents: scheduleResult[i]?.transaction.valueCents!,
          categories: scheduleResult[i]?.transaction.categories,
          date: today,
        })
        console.log('triggerScheduleTransactionNumber => ', i + 1, ' of ', scheduleResult.length)
        console.log('triggerScheduleTransactionResult => ', transactionResult)
      }

      console.log('triggerScheduleUseCaseResult => ', scheduleResult)
    } catch (error) {
      console.log(SchedulesTriggerFailed.message)
    }
  }
}
