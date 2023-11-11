import { injectable, inject } from 'inversify'

import { left, right } from '../../../framework/shared/either'
import { IUseCase } from '../iUseCase'
import { InputGetTransactionDto, OutputGetTransactionDto } from '../../dto/transactionDto'
import { TransactionGetFailed, TransactionNotFound } from '../../module/errors/transactions'
import { ITransactionRepository, ITransactionRepositoryToken } from '../../repositories/iTransactionRepository'

@injectable()
export class GetTransactionUseCase implements IUseCase<InputGetTransactionDto, OutputGetTransactionDto> {
  public constructor(@inject(ITransactionRepositoryToken) private transactionRepository: ITransactionRepository) {}

  async exec(input: InputGetTransactionDto): Promise<OutputGetTransactionDto> {
    try {
      const transactionResult = await this.transactionRepository.get(input.transactionId)
      console.log('transaction::result => ', transactionResult)

      if(!transactionResult) {
        return left(TransactionNotFound)
      }
      
      return right(transactionResult)
    } catch (error) {
      return left(TransactionGetFailed)
    }
  }
}