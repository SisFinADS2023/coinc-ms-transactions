import { ContainerModule, interfaces } from 'inversify'
import { ICategoryRepository, ICategoryRepositoryToken } from '../../business/repositories/iCategoryRepository'
import { IScheduleRepository, IScheduleRepositoryToken } from '../../business/repositories/iScheduleRepository'

import { ITransactionRepository, ITransactionRepositoryToken } from '../../business/repositories/iTransactionRepository'
import { CategoryRepository } from '../repositories/categoryRepository'
import { ScheduleRepository } from '../repositories/scheduleRepository'
import { TransactionRepository } from '../repositories/transactionRepository'

export const RepositoryModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<ITransactionRepository>(ITransactionRepositoryToken).to(TransactionRepository)
  bind<ICategoryRepository>(ICategoryRepositoryToken).to(CategoryRepository)
  bind<IScheduleRepository>(IScheduleRepositoryToken).to(ScheduleRepository)
})
