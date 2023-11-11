import 'reflect-metadata'
import '../../ioc/inversify.config'
import { APIGatewayProxyEvent, Context } from 'aws-lambda'

import { container } from '../../shared/ioc/container'
import { httpHandler } from '../../utility/httpHandler'
import { httpResponse } from '../../utility/httpResponse'
import { InputListCategories } from '../../../controller/serializers/inputListCategories'
import { ListCategoriesOperator } from '../../../controller/operators/listCategoriesOperator'

export const handler = httpHandler(async (event: APIGatewayProxyEvent, context: Context) => {
    context.callbackWaitsForEmptyEventLoop = false

    const operator = container.get(ListCategoriesOperator)
    const body = event?.queryStringParameters
    console.log(body)
    const input = new InputListCategories({
        ...(body as object),
        page: body?.page ? Number(body.page) : undefined,
        perPage: body?.perPage ? Number(body.perPage) : undefined
    })
    const result = await operator.exec(input)

    if (result.isLeft()) {
        return httpResponse.badRequest(result.value)
    }

    return httpResponse.ok(result.value)
})