import { ContainerModule, interfaces } from 'inversify'

import { TransactionModel } from '../models/transactionModel'

export const ModelsModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<typeof TransactionModel>(TransactionModel).toConstructor(TransactionModel)
})
