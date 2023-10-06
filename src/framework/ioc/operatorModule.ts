import { ContainerModule, interfaces } from 'inversify'
import { CreateCategoryOperator } from '../../controller/operators/createCategoryOperator'
import { CreateTransactionOperator } from '../../controller/operators/createTransactionOperator'
import { DeleteTransactionOperator } from '../../controller/operators/deleteTransactionOperator'
import { GetTransactionOperator } from '../../controller/operators/getTransactionOperator'

export const OperatorModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateTransactionOperator).toSelf()
  bind(DeleteTransactionOperator).toSelf()
  bind(GetTransactionOperator).toSelf()

  bind(CreateCategoryOperator).toSelf()
})
