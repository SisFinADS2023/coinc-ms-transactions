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

export class TransactionEntity extends AbstractEntity<ITransactionEntity> {}
