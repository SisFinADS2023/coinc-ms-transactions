import 'reflect-metadata'
import { TriggerSchedulesOperator } from '../../../controller/operators/schedules/triggerSchedulesOperator'
import '../../ioc/inversify.config'
import { container } from '../../shared/ioc/container'

export const handler = async () => {
  const operator = container.get(TriggerSchedulesOperator)

  const result = await operator.exec()
  console.log('triggerScheduleResult => ', result)
}
