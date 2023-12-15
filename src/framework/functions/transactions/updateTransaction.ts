import 'reflect-metadata'
import '../../ioc/inversify.config'
import { APIGatewayProxyEvent, Context } from 'aws-lambda'

import { httpHandler } from '../../utility/httpHandler'
import { container } from '../../shared/ioc/container'
import { httpResponse } from '../../utility/httpResponse'
import { UpdateTransactionOperator } from '../../../controller/operators/transactions/updateTransactionOperator'
import { InputUpdateTransaction } from '../../../controller/serializers/transactions/inputUpdateTransaction'
import { CategoryNotFound } from '../../../business/module/errors/categories'
import { TransactionNotFound } from '../../../business/module/errors/transactions'

export const handler = httpHandler(async (event: APIGatewayProxyEvent, context: Context) => {
    context.callbackWaitsForEmptyEventLoop = false
    const operator = container.get(UpdateTransactionOperator)
    
    const body = JSON.parse(event?.body as string)
    const { date } = body

    const payload = {
      ...body,
      ...(date && { date: new Date(date) })
    }
    const input = new InputUpdateTransaction(payload)
    const result = await operator.exec(input)

    if (result.isLeft()) {

        if (result.value.code == CategoryNotFound.code) {
          return httpResponse.notFound(result.value)
        }
        if (result.value.code == TransactionNotFound.code) {
            return httpResponse.notFound(result.value)
        }
        
        return httpResponse.badRequest(result.value)
      }

    

    return httpResponse.created(result.value)
})