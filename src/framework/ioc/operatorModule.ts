import { ContainerModule, interfaces } from 'inversify'
import { CreateTransactionOperator } from '../../controller/operators/createTransactionOperator'
import { DeleteTransactionOperator } from '../../controller/operators/deleteTransactionOperator'

export const OperatorModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateTransactionOperator).toSelf()
  bind(DeleteTransactionOperator).toSelf()
})
