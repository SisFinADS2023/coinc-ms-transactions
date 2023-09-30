import 'reflect-metadata'
import '../ioc/inversify.config'
import { APIGatewayProxyEvent, Context } from 'aws-lambda'

import { httpHandler } from '../utility/httpHandler'
import { container } from '../shared/ioc/container'
import { httpResponse } from '../utility/httpResponse'
import { GetTransactionOperator } from '../../controller/operators/getTransactionOperator'
import { InputGetTransaction } from '../../controller/serializers/inputGetTransaction'
import { TransactionNotFound } from '../../business/module/errors/transactions'

export const handler = httpHandler(async (event: APIGatewayProxyEvent, context: Context) => {
  context.callbackWaitsForEmptyEventLoop = false
  const operator = container.get(GetTransactionOperator)
  const body = event?.pathParameters
  
  const input = new InputGetTransaction(body as Object)
  const result = await operator.exec(input)

  if (result.isLeft()) {

    if (result.value.code == TransactionNotFound.code) {
      return httpResponse.notFound(result.value)
    } 
    
    return httpResponse.badRequest(result.value)
  }

  return httpResponse.ok(result.value)
})