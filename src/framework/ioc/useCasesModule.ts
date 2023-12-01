import { ContainerModule, interfaces } from 'inversify'
import { CreateCategoryUseCase } from '../../business/useCases/categories/createCategoryUseCase'
import { CreateTransactionUseCase } from '../../business/useCases/transactions/createTransactionUseCase'
import { DeleteCategoryUseCase } from '../../business/useCases/categories/deleteCategoryUseCase'
import { DeleteTransactionUseCase } from '../../business/useCases/transactions/deleteTransactionUseCase'
import { GetTransactionUseCase } from '../../business/useCases/transactions/getTransactionUseCase'
import { CreateScheduleUseCase } from '../../business/useCases/schedules/createScheduleUseCase'
import { UpdateCategoryUseCase } from '../../business/useCases/categories/updateCategoryUseCase'
import { ListTransactionsUseCase } from '../../business/useCases/transactions/ListTransactionsUseCase'
import { ListSchedulesUseCase } from '../../business/useCases/schedules/ListSchedulesUseCase'
import { ListCategoriesUseCase } from '../../business/useCases/categories/ListCategoriesUseCase'
import { DeleteScheduleUseCase } from '../../business/useCases/schedules/deleteScheduleUseCase'
import { UpdateScheduleUseCase } from '../../business/useCases/schedules/updateScheduleUseCase'
import { GetScheduleUseCase } from '../../business/useCases/schedules/getScheduleUseCase'

export const UseCasesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateTransactionUseCase).toSelf()
  bind(DeleteTransactionUseCase).toSelf()
  bind(GetTransactionUseCase).toSelf()
  bind(ListTransactionsUseCase).toSelf()

  bind(CreateCategoryUseCase).toSelf()
  bind(UpdateCategoryUseCase).toSelf()
  bind(ListCategoriesUseCase).toSelf()
  bind(DeleteCategoryUseCase).toSelf()

  bind(CreateScheduleUseCase).toSelf()
  bind(GetScheduleUseCase).toSelf()
  bind(DeleteScheduleUseCase).toSelf()
  bind(UpdateScheduleUseCase).toSelf()
  bind(ListSchedulesUseCase).toSelf()
})
