import { ContainerModule, interfaces } from 'inversify'
import { CreateCategoryUseCase } from '../../business/useCases/categories/createCategoryUseCase'
import { CreateTransactionUseCase } from '../../business/useCases/transactions/createTransactionUseCase'
import { DeleteCategoryUseCase } from '../../business/useCases/categories/deleteCategoryUseCase'
import { DeleteTransactionUseCase } from '../../business/useCases/transactions/deleteTransactionUseCase'
import { GetTransactionUseCase } from '../../business/useCases/transactions/getTransactionUseCase'
import { CreateScheduleUseCase } from '../../business/useCases/schedules/createScheduleUseCase'

export const UseCasesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateTransactionUseCase).toSelf()
  bind(DeleteTransactionUseCase).toSelf()
  bind(GetTransactionUseCase).toSelf()

  bind(CreateCategoryUseCase).toSelf()
  bind(DeleteCategoryUseCase).toSelf()

  bind(CreateScheduleUseCase).toSelf()
})
