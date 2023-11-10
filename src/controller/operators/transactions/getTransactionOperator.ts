import { injectable, inject } from 'inversify'

import { GetTransactionUseCase } from '../../../business/useCases/transactions/getTransactionUseCase'
import { left, right } from '../../../framework/shared/either'
import { InputGetTransaction, OutputGetTransaction } from '../../serializers/transactions/inputGetTransaction'
import { AbstractOperator } from '../abstractOperator'

@injectable()
export class GetTransactionOperator extends AbstractOperator<InputGetTransaction, OutputGetTransaction> {
  public constructor(@inject(GetTransactionUseCase) private getTransactionUseCase: GetTransactionUseCase) {
    super()
  }

  protected async run(input: InputGetTransaction): Promise<OutputGetTransaction> {
    const result = await this.getTransactionUseCase.exec(input)

    if (result.isLeft()) {
      return left(result.value)
    }

    return right(result.value)
  }
}