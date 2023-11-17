import 'reflect-metadata'
import '../../ioc/inversify.config'
import { APIGatewayProxyEvent, Context } from 'aws-lambda'

import { httpHandler } from '../../utility/httpHandler'
import { container } from '../../shared/ioc/container'
import { httpResponse } from '../../utility/httpResponse'
import { DeleteScheduleOperator } from '../../../controller/operators/schedules/deleteScheduleOperator'
import { InputDeleteSchedule } from '../../../controller/serializers/schedules/inputDeleteSchedule'

export const handler = httpHandler(async (event: APIGatewayProxyEvent, context: Context) => {
    context.callbackWaitsForEmptyEventLoop = false
    const operator = container.get(DeleteScheduleOperator)

    const body = event?.pathParameters

    const input = new InputDeleteSchedule(body as Object)
    const result = await operator.exec(input)

    if (result.isLeft()) {
        return httpResponse.badRequest(result.value)
    }

    return httpResponse.ok(result.value)
})