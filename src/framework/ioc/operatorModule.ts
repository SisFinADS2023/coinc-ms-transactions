import { ContainerModule, interfaces } from 'inversify'
import { CreateTransactionOperator } from '../../controller/operators/createTransactionOperator'
import { GetTransactionOperator } from '../../controller/operators/getTransactionOperator'

export const OperatorModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateTransactionOperator).toSelf()
  bind(GetTransactionOperator).toSelf()
})
