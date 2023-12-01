import 'reflect-metadata'
import '../../ioc/inversify.config'
import { APIGatewayProxyEvent, Context } from 'aws-lambda'

import { httpHandler } from '../../utility/httpHandler'
import { container } from '../../shared/ioc/container'
import { httpResponse } from '../../utility/httpResponse'
import { GetScheduleOperator } from '../../../controller/operators/schedules/getScheduleOperator'
import { InputGetSchedule } from '../../../controller/serializers/schedules/inputGetSchedule'
import { ScheduleNotFound } from '../../../business/module/errors/schedules'

export const handler = httpHandler(async (event: APIGatewayProxyEvent, context: Context) => {
    context.callbackWaitsForEmptyEventLoop = false
    const operator = container.get(GetScheduleOperator)
    const body = event?.pathParameters
    
    const input = new InputGetSchedule(body as Object)
    const result = await operator.exec(input)
    
    if (result.isLeft()) {
        
        if (result.value.code == ScheduleNotFound.code) {
            return httpResponse.notFound(result.value)
        }

        return httpResponse.badRequest(result.value)
    }

    return httpResponse.ok(result.value)
})