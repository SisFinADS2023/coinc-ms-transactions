import { ContainerModule, interfaces } from 'inversify'
import { CreateTransactionUseCase } from '../../business/useCases/createTransactionUseCase'
import { DeleteTransactionUseCase } from '../../business/useCases/deleteTransactionUseCase'

export const UseCasesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateTransactionUseCase).toSelf()
  bind(DeleteTransactionUseCase).toSelf()
})
