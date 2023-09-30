import { injectable, inject } from 'inversify'

import { left, right } from '../../framework/shared/either'
import { AbstractOperator } from './abstractOperator'
import { DeleteTransactionUseCase } from '../../business/useCases/deleteTransactionUseCase'
import { InputDeleteTransaction, OutputDeleteTransaction } from '../serializers/inputDeleteTransaction'

@injectable()
export class DeleteTransactionOperator extends AbstractOperator<InputDeleteTransaction, OutputDeleteTransaction> {
  public constructor(@inject(DeleteTransactionUseCase) private deleteTransactionUseCase: DeleteTransactionUseCase) {
    super()
  }
  
  protected async run(input: InputDeleteTransaction): Promise<OutputDeleteTransaction> {
    const result = await this.deleteTransactionUseCase.exec(input)

    if (result.isLeft()) {
      return left(result.value)
    }

    return right(result.value)
  }
}
