import { ContainerModule, interfaces } from 'inversify'
import { CreateCategoryOperator } from '../../controller/operators/createCategoryOperator'
import { CreateTransactionOperator } from '../../controller/operators/createTransactionOperator'
import { DeleteCategoryOperator } from '../../controller/operators/deleteCategoryOperator'
import { DeleteTransactionOperator } from '../../controller/operators/deleteTransactionOperator'
import { GetTransactionOperator } from '../../controller/operators/getTransactionOperator'
import { UpdateCategoryOperator } from '../../controller/operators/updateCategoryOperator'
import { ListTransactionsOperator } from '../../controller/operators/transactions/listTransactionsOperator'
import { ListCategoriesOperator } from '../../controller/operators/listCategoriesOperator'

export const OperatorModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateTransactionOperator).toSelf()
  bind(DeleteTransactionOperator).toSelf()
  bind(GetTransactionOperator).toSelf()
  bind(ListTransactionsOperator).toSelf()

  bind(CreateCategoryOperator).toSelf()
  bind(DeleteCategoryOperator).toSelf()
  bind(UpdateCategoryOperator).toSelf()
  bind(ListCategoriesOperator).toSelf()
})
