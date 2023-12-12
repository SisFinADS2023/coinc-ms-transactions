import { ContainerModule, interfaces } from 'inversify'
import { CreateCategoryOperator } from '../../controller/operators/categories/createCategoryOperator'
import { DeleteCategoryOperator } from '../../controller/operators/categories/deleteCategoryOperator'
import { CreateScheduleOperator } from '../../controller/operators/schedules/createScheduleOperator'
import { CreateTransactionOperator } from '../../controller/operators/transactions/createTransactionOperator'
import { DeleteTransactionOperator } from '../../controller/operators/transactions/deleteTransactionOperator'
import { GetTransactionOperator } from '../../controller/operators/transactions/getTransactionOperator'
import { UpdateCategoryOperator } from '../../controller/operators/categories/updateCategoryOperator'
import { ListTransactionsOperator } from '../../controller/operators/transactions/listTransactionsOperator'
import { ListSchedulesOperator } from '../../controller/operators/schedules/listSchedulesOperator'
import { ListCategoriesOperator } from '../../controller/operators/categories/listCategoriesOperator'
import { DeleteScheduleOperator } from '../../controller/operators/schedules/deleteScheduleOperator'
import { TriggerSchedulesOperator } from '../../controller/operators/schedules/triggerSchedulesOperator'
import { UpdateScheduleOperator } from '../../controller/operators/schedules/updateScheduleOperator'
import { GetScheduleOperator } from '../../controller/operators/schedules/getScheduleOperator'

export const OperatorModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateTransactionOperator).toSelf()
  bind(DeleteTransactionOperator).toSelf()
  bind(GetTransactionOperator).toSelf()
  bind(ListTransactionsOperator).toSelf()

  bind(CreateCategoryOperator).toSelf()
  bind(UpdateCategoryOperator).toSelf()
  bind(ListCategoriesOperator).toSelf()
  bind(DeleteCategoryOperator).toSelf()

  bind(CreateScheduleOperator).toSelf()
  bind(GetScheduleOperator).toSelf()
  bind(DeleteScheduleOperator).toSelf()
  bind(UpdateScheduleOperator).toSelf()
  bind(ListSchedulesOperator).toSelf()
  bind(TriggerSchedulesOperator).toSelf()
})
