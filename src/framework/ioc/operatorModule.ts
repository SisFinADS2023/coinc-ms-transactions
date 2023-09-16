import { ContainerModule, interfaces } from 'inversify'
import { CreateTransactionOperator } from '../../controller/operators/createTransactionOperator'

export const OperatorModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateTransactionOperator).toSelf()
})
