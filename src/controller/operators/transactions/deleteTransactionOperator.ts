import { injectable, inject } from 'inversify'
import { DeleteTransactionUseCase } from '../../../business/useCases/transactions/deleteTransactionUseCase'
import { left, right } from '../../../framework/shared/either'
import { InputDeleteTransaction, OutputDeleteTransaction } from '../../serializers/transactions/inputDeleteTransaction'
import { AbstractOperator } from '../abstractOperator'

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
