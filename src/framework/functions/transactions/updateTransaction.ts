import 'reflect-metadata'
import '../../ioc/inversify.config'
import { APIGatewayProxyEvent, Context } from 'aws-lambda'

import { httpHandler } from '../../utility/httpHandler'
import { container } from '../../shared/ioc/container'
import { httpResponse } from '../../utility/httpResponse'
import { UpdateTransactionOperator } from '../../../controller/operators/transactions/updateTransactionOperator'
import { InputUpdateCategory } from '../../../controller/serializers/categories/inputUpdateCategory'

export const handler = httpHandler(async (event: APIGatewayProxyEvent, context: Context) => {
    context.callbackWaitsForEmptyEventLoop = false
    const operator = container.get(UpdateTransactionOperator)
    const body = JSON.parse(event?.body as string)

    const input = new InputUpdateCategory(body as Object)
    const result = await operator.exec(input)

    if (result.isLeft()) {
        return httpResponse.badRequest(result.value)
    }

    return httpResponse.created(result.value)
})