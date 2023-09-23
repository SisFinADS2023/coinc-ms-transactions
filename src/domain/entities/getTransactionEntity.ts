import { Double, UUID } from 'mongodb'

export interface IGetTransactionEntity {
    transactionId?: string
    userId: UUID | undefined
    name: string | undefined
    valueCents: Double | undefined
    categoryId?: UUID | undefined
    date?: Date | undefined
    createdAt?: Date | undefined
    updatedAt?: Date | undefined
  }