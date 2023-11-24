import { injectable, inject } from 'inversify'

import { left, right } from '../../../framework/shared/either'
import { AbstractOperator } from '../abstractOperator'
import { UpdateTransactionUseCase } from '../../../business/useCases/transactions/updateTransactionUseCase'
import { InputUpdateTransaction, OutputUpdateTransaction } from '../../serializers/transactions/inputUpdateTransaction'

@injectable()
export class UpdateTransactionOperator extends AbstractOperator<InputUpdateTransaction, OutputUpdateTransaction> {
    public constructor(@inject(UpdateTransactionUseCase) private updateTransactionUseCase: UpdateTransactionUseCase) {
        super()
    }

    protected async run(input: InputUpdateTransaction): Promise<OutputUpdateTransaction> {
        const result = await this.updateTransactionUseCase.exec(input)

        if (result.isLeft()) {
        return left(result.value)
        }

        return right(result.value)
    }
}