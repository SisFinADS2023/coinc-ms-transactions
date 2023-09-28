import { randomUUID } from 'crypto'

import { Either, right } from '../../framework/shared/either'
import { IError } from '../../framework/shared/iError'
import { AbstractEntity } from './abstractEntity'

export interface ITransactionEntity {
  transactionId?: string
  userId: string
  name: string
  valueCents: Number
  categoryId?: string
  date?: Date
  createdAt?: Date
  updatedAt?: Date
}

export class TransactionEntity extends AbstractEntity<ITransactionEntity> {
  static create(props: ITransactionEntity): Either<IError, TransactionEntity> {
    const transaction = new TransactionEntity({
      ...props,
      transactionId: randomUUID()
    })

    return right(transaction)
  }
}
