import { inject, injectable } from "inversify"

import { AbstractOperator } from "../abstractOperator"
import { left, right } from "../../../framework/shared/either"
import { InputListTransactions, OutputListTransactions } from "../../serializers/transactions/inputListTransactions"
import { ListTransactionsUseCase } from "../../../business/useCases/transactions/ListTransactionsUseCase"

@injectable()
export class ListTransactionsOperator extends AbstractOperator<InputListTransactions, OutputListTransactions> {
  public constructor(@inject(ListTransactionsUseCase) private listTransactionsUseCase: ListTransactionsUseCase) {
    super()
  }

  protected async run(input: InputListTransactions): Promise<OutputListTransactions> {
    const result = await this.listTransactionsUseCase.exec(input)

    if (result.isLeft()) {
      return left(result.value)
    }

    return right(result.value)
  }
}
