import { injectable, inject } from 'inversify'

import { left, right } from '../../../framework/shared/either'
import { IUseCase } from '../iUseCase'
import { InputUpdateTransactionDto, OutputUpdateTransactionDto } from '../../dto/transactionDto'
import { TransactionUpdateFailed, TransactionNotFound } from '../../module/errors/transactions'
import { ITransactionRepository, ITransactionRepositoryToken } from '../../repositories/iTransactionRepository'

@injectable()
export class UpdateTransactionUseCase implements IUseCase<InputUpdateTransactionDto, OutputUpdateTransactionDto> {
    public constructor(@inject(ITransactionRepositoryToken) private transactionRepository: ITransactionRepository) {}

    async exec(input: InputUpdateTransactionDto): Promise<OutputUpdateTransactionDto> {
        try {
            const transaction = await this.transactionRepository.update(input)
            if(!transaction){
                return left(TransactionNotFound)
            } else {
                console.log('transaction => ', transaction)
            }
      
            return right(transaction)
        } catch (error) {
            return left(TransactionUpdateFailed)
        }
    }
}