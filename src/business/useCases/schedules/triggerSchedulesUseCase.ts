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
        console.log('scheduleResult[i] => ', scheduleResult[i])
        if (scheduleResult[i]?.quantity && scheduleResult[i]?.quantity != 0) break

        const createTransactionResult = await this.transactionRepository.create({
          bankAccountId: scheduleResult[i]?.transaction.bankAccountId,
          userId: scheduleResult[i]?.userId!,
          name: scheduleResult[i]?.transaction.name!,
          valueCents: scheduleResult[i]?.transaction.valueCents!,
          categories: scheduleResult[i]?.transaction.categories,
          date: today,
        })

        let newStartDate
        if (scheduleResult[i]?.startDate) {
        switch (scheduleResult[i]?.interval) {
          case 'daily':
            newStartDate = new Date(scheduleResult[i]?.startDate?.getDate() + 1);
            break;
          case 'weekly':
              newStartDate = new Date(scheduleResult[i]?.startDate?.getDate() + 7);
              break;
          case 'monthly':
            newStartDate = new Date(scheduleResult[i]?.startDate?.getDate() + 30);
            break;
          default:
            console.log('triggerSchedulesError::unknownIntervalType => ', scheduleResult[i]?.interval)
        }}
        console.log('newStartDate => ', newStartDate)

        let updateScheduleResult
        if (scheduleResult[i]?.quantity) {
          const newQuantity = +scheduleResult[i]?.quantity! + 1
          console.log('newQuantity => ', newQuantity)
          updateScheduleResult = await this.scheduleRepository.update({
            scheduleId: scheduleResult[i]?.scheduleId,
            startDate: newStartDate,
            quantity: newQuantity
          })
        } else {
          updateScheduleResult = await this.scheduleRepository.update({
            scheduleId: scheduleResult[i]?.scheduleId,
            startDate: newStartDate
          })
        }

        console.log('triggerScheduleTransactionNumber => ', i + 1, ' of ', scheduleResult.length)
        console.log('triggerScheduleTransactionResult => ', createTransactionResult)
        console.log('triggerScheduleUpdateResult => ', updateScheduleResult)
      }
    } catch (error) {
      console.log(SchedulesTriggerFailed.message)
      console.log('triggerSchedulesError => ', error)
    }
  }
}
