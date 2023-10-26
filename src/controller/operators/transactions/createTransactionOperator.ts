import { injectable, inject } from 'inversify'

import { left, right } from '../../../framework/shared/either'
import { AbstractOperator } from '../abstractOperator'
import { CreateTransactionUseCase } from '../../../business/useCases/transactions/createTransactionUseCase'
import { InputCreateTransaction, OutputCreateTransaction } from '../../serializers/transactions/inputCreateTransaction'

@injectable()
export class CreateTransactionOperator extends AbstractOperator<InputCreateTransaction, OutputCreateTransaction> {
  public constructor(@inject(CreateTransactionUseCase) private createTransactionUseCase: CreateTransactionUseCase) {
    super()
  }

  protected async run(input: InputCreateTransaction): Promise<OutputCreateTransaction> {
    const result = await this.createTransactionUseCase.exec(input)

    if (result.isLeft()) {
      return left(result.value)
    }

    return right(result.value)
  }
}
