import { injectable, inject } from 'inversify'

import { left, right } from '../../framework/shared/either'
import { IUseCase } from './iUseCase'
import { InputCreateTransactionDto, OutputCreateTransactionDto } from '../dto/transactionDto'
import { TransactionCreationFailed } from '../module/errors/transactions'
import { ITransactionRepository, ITransactionRepositoryToken } from '../repositories/iTransactionRepository'

@injectable()
export class CreateTransactionUseCase implements IUseCase<InputCreateTransactionDto, OutputCreateTransactionDto> {
  public constructor(@inject(ITransactionRepositoryToken) private transactionRepository: ITransactionRepository) {}

  async exec(input: InputCreateTransactionDto): Promise<OutputCreateTransactionDto> {
    try {
      const transaction = await this.transactionRepository.create(input)
      console.log('transaction => ', transaction)
      
      return right(transaction)
    } catch (error) {
      return left(TransactionCreationFailed)
    }
  }
}
