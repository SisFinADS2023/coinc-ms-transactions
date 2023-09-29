import 'reflect-metadata'
import '../ioc/inversify.config'
import { APIGatewayProxyEvent, Context } from 'aws-lambda'

import { httpHandler } from '../utility/httpHandler'
import { container } from '../shared/ioc/container'
import { httpResponse } from '../utility/httpResponse'
import { DeleteTransactionOperator } from '../../controller/operators/deleteTransactionOperator'
import { InputDeleteTransaction } from '../../controller/serializers/inputDeleteTransaction'
import { dbConnect } from '../utility/database'

export const handler = httpHandler(async (event: APIGatewayProxyEvent, context: Context) => {
  context.callbackWaitsForEmptyEventLoop = false
  const operator = container.get(DeleteTransactionOperator)
  
  const body = event?.pathParameters

  await dbConnect()
  console.log('connect')
  const input = new InputDeleteTransaction(body as Object)
  const result = await operator.exec(input)

  if (result.isLeft()) {
    return httpResponse.badRequest(result.value)
  }

  return httpResponse.created(result.value)
})
