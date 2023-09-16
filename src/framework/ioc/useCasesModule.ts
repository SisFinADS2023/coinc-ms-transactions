import { ContainerModule, interfaces } from 'inversify'
import { CreateTransactionUseCase } from '../../business/useCases/createTransactionUseCase'

export const UseCasesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateTransactionUseCase).toSelf()
})
