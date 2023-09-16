import { ContainerModule, interfaces } from 'inversify'

import { ITransactionRepository, ITransactionRepositoryToken } from '../../business/repositories/iTransactionRepository'
import { TransactionRepository } from '../repositories/transactionRepository'

export const RepositoryModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<ITransactionRepository>(ITransactionRepositoryToken).to(TransactionRepository)
})
