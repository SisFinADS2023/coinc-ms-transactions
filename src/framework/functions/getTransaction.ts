import 'reflect-metadata'
import '../ioc/inversify.config'
import { APIGatewayProxyEvent, Context } from 'aws-lambda'

import { httpHandler } from '../utility/httpHandler'
import { container } from '../shared/ioc/container'
import { httpResponse } from '../utility/httpResponse'
import { GetTransactionOperator } from '../../controller/operators/getTransactionOperator'
import { InputGetTransaction } from '../../controller/serializers/inputGetTransaction'
import { dbConnect } from '../utility/database'

export const handler = httpHandler(async (event: APIGatewayProxyEvent, context: Context) => {
  try {
    console.log('Chegou Aqui getTransaction')
    context.callbackWaitsForEmptyEventLoop = false
    const operator = container.get(GetTransactionOperator)
    console.log(operator)
    const body = event?.pathParameters
    console.log(body)
    await dbConnect()
    const input = new InputGetTransaction(body as Object)
    console.log(input)
    const result = await operator.exec(input)

    if (result.isLeft()) {
      return httpResponse.badRequest(result.value)
    }

    return httpResponse.created(result.value)
  } catch (error) {
    console.log(error);
  }
})