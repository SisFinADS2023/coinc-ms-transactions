import { AbstractEntity } from './abstractEntity'

export interface ITransactionEntity {
  transactionId?: string
  bankAccountId?: string
  userId: string
  name: string
  valueCents: Number
  categories?: [string]
  date?: Date
  createdAt?: Date
  updatedAt?: Date
}

export class TransactionEntity extends AbstractEntity<ITransactionEntity> {}
