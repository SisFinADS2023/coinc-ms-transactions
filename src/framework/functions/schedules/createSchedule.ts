import 'reflect-metadata'
import '../../ioc/inversify.config'
import { APIGatewayProxyEvent, Context } from 'aws-lambda'

import { httpHandler } from '../../utility/httpHandler'
import { container } from '../../shared/ioc/container'
import { httpResponse } from '../../utility/httpResponse'
import { CreateScheduleOperator } from '../../../controller/operators/schedules/createScheduleOperator'
import { InputCreateSchedule } from '../../../controller/serializers/schedules/inputCreateSchedule'

export const handler = httpHandler(async (event: APIGatewayProxyEvent, context: Context) => {
  context.callbackWaitsForEmptyEventLoop = false
  const operator = container.get(CreateScheduleOperator)
  const body = JSON.parse(event?.body as string)
  const { startDate } = body

  const payload = {
    ...body,
    ...(startDate && { date: new Date(startDate) })
  }

  const input = new InputCreateSchedule(payload)
  const result = await operator.exec(input)

  if (result.isLeft()) {
    return httpResponse.badRequest(result.value)
  }

  return httpResponse.created(result.value)
})