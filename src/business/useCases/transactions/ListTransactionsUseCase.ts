import { injectable, inject } from 'inversify'

import { IUseCase } from '../iUseCase'
import { left, right } from '../../../framework/shared/either'
import { ITransactionRepository, ITransactionRepositoryToken } from '../../repositories/iTransactionRepository'
import { InputListTransactionsDto, OutputListTransactionsDto } from '../../dto/transactions/listTransactionsDto'
import { TransactionsListFailed } from '../../module/errors/transactions'

@injectable()
export class ListTransactionsUseCase implements IUseCase<InputListTransactionsDto, OutputListTransactionsDto> {
  public constructor(@inject(ITransactionRepositoryToken) private transactionRepository: ITransactionRepository) {}

  async exec(input: InputListTransactionsDto): Promise<OutputListTransactionsDto> {
    try {
      console.log({ input })
      const transactionResult = await this.transactionRepository.list(input)

      return right(transactionResult)
    } catch (error) {
      console.log('ListTransactionsUseCase::Error => ', error)

      return left(TransactionsListFailed)
    }
  }
}
