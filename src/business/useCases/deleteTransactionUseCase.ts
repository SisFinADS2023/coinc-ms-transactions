import { injectable, inject } from 'inversify'

import { left, right } from '../../framework/shared/either'
import { IUseCase } from './iUseCase'
import { InputDeleteTransactionDto, OutputDeleteTransactionDto } from '../dto/transactionDto'
import { TransactionDeleteFailed } from '../module/errors/transactions'
import { ITransactionRepository, ITransactionRepositoryToken } from '../repositories/iTransactionRepository'

@injectable()
export class DeleteTransactionUseCase implements IUseCase<InputDeleteTransactionDto, OutputDeleteTransactionDto> {
  public constructor(@inject(ITransactionRepositoryToken) private transactionRepository: ITransactionRepository) {}

  async exec(input: InputDeleteTransactionDto): Promise<OutputDeleteTransactionDto> {
    try {
        const transactionResult = await this.transactionRepository.delete(input.transactionId)
        if(!transactionResult) {
            return left(TransactionDeleteFailed)
        }
        return right(transactionResult)
    } catch (error) {
      return left(TransactionDeleteFailed)
    }
  }
}