import { ContainerModule, interfaces } from 'inversify'
import { CategoryModel } from '../models/categoryModel'

import { TransactionModel } from '../models/transactionModel'

export const ModelsModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<typeof TransactionModel>(TransactionModel).toConstructor(TransactionModel)
  bind<typeof CategoryModel>(CategoryModel).toConstructor(CategoryModel)
})
