import { ContainerModule, interfaces } from 'inversify'
import { CreateCategoryOperator } from '../../controller/operators/categories/createCategoryOperator'
import { DeleteCategoryOperator } from '../../controller/operators/categories/deleteCategoryOperator'
import { CreateTransactionOperator } from '../../controller/operators/transactions/createTransactionOperator'
import { DeleteTransactionOperator } from '../../controller/operators/transactions/deleteTransactionOperator'
import { GetTransactionOperator } from '../../controller/operators/transactions/getTransactionOperator'

export const OperatorModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateTransactionOperator).toSelf()
  bind(DeleteTransactionOperator).toSelf()
  bind(GetTransactionOperator).toSelf()

  bind(CreateCategoryOperator).toSelf()
  bind(DeleteCategoryOperator).toSelf()
})
