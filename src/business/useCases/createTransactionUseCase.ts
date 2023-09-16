import { injectable, inject } from 'inversify'

import { left, right } from '../../framework/shared/either'
import { IUseCase } from './iUseCase'
import { InputCreateTransactionDto, OutputCreateTransactionDto } from '../dto/transactionDto'
import { TransactionCreationFailed } from '../module/errors/transactions'
import { TransactionEntity } from '../../domain/entities/transactionEntity'
import { ITransactionRepository, ITransactionRepositoryToken } from '../repositories/iTransactionRepository'

@injectable()
export class CreateTransactionUseCase implements IUseCase<InputCreateTransactionDto, OutputCreateTransactionDto> {
  public constructor(@inject(ITransactionRepositoryToken) private transactionRepository: ITransactionRepository) {}

  async exec(input: InputCreateTransactionDto): Promise<OutputCreateTransactionDto> {
    try {
      const transactionResult = TransactionEntity.create(input)
      console.log('transaction::result => ', transactionResult)

      if (transactionResult.isLeft()) {
        return left(TransactionCreationFailed)
      }

      const transaction = await this.transactionRepository.create(transactionResult.value.export())
      console.log('transaction => ', transaction)
      return right(transaction)
    } catch (error) {
      return left(TransactionCreationFailed)
    }
  }
}
