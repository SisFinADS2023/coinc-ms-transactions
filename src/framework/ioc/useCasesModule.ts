import { ContainerModule, interfaces } from 'inversify'
import { CreateCategoryUseCase } from '../../business/useCases/createCategoryUseCase'
import { CreateTransactionUseCase } from '../../business/useCases/createTransactionUseCase'
import { DeleteCategoryUseCase } from '../../business/useCases/deleteCategoryUseCase'
import { DeleteTransactionUseCase } from '../../business/useCases/deleteTransactionUseCase'
import { GetTransactionUseCase } from '../../business/useCases/getTransactionUseCase'
import { UpdateCategoryUseCase } from '../../business/useCases/updateCategoryUseCase'
import { ListTransactionsUseCase } from '../../business/useCases/transactions/ListTransactionsUseCase'

export const UseCasesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateTransactionUseCase).toSelf()
  bind(DeleteTransactionUseCase).toSelf()
  bind(GetTransactionUseCase).toSelf()
  bind(ListTransactionsUseCase).toSelf()

  bind(CreateCategoryUseCase).toSelf()
  bind(DeleteCategoryUseCase).toSelf()
  bind(UpdateCategoryUseCase).toSelf()
})
