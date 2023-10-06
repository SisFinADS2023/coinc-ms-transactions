import 'reflect-metadata'
import '../../ioc/inversify.config'
import { APIGatewayProxyEvent, Context } from 'aws-lambda'

import { httpHandler } from '../../utility/httpHandler'
import { container } from '../../shared/ioc/container'
import { httpResponse } from '../../utility/httpResponse'
import { CreateTransactionOperator } from '../../../controller/operators/createTransactionOperator'
import { InputCreateTransaction } from '../../../controller/serializers/inputCreateTransaction'
import { CategoryNotFound } from '../../../business/module/errors/categories'

export const handler = httpHandler(async (event: APIGatewayProxyEvent, context: Context) => {
  context.callbackWaitsForEmptyEventLoop = false
  const operator = container.get(CreateTransactionOperator)
  const body = JSON.parse(event?.body as string)
  const { date } = body

  const payload = {
    ...body,
    ...(date && { date: new Date(date) })
  }

  const input = new InputCreateTransaction(payload)
  const result = await operator.exec(input)

  if (result.isLeft()) {
    if (result.value.code == CategoryNotFound.code) {
      return httpResponse.notFound(result.value)
    }

    return httpResponse.badRequest(result.value)
  }

  return httpResponse.created(result.value)
})
