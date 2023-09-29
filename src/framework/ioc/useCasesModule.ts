import { ContainerModule, interfaces } from 'inversify'
import { CreateTransactionUseCase } from '../../business/useCases/createTransactionUseCase'
import { GetTransactionUseCase } from '../../business/useCases/getTransactionUseCase'

export const UseCasesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateTransactionUseCase).toSelf()
  bind(GetTransactionUseCase).toSelf()
})
