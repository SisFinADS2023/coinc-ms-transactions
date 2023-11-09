import '../utility/database'
import { Schema, model, Model } from "mongoose"
import { ITransactionEntity } from "../../domain/entities/transactionEntity"

const transactionSchema = new Schema<ITransactionEntity> (
  {
    bankAccountId: {
      type: String,
      required: false
    },
    userId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    valueCents: {
      type: Number,
      required: true
    },
    categories: [{
      type: String,
      ref: 'Categories',
      required: false
    }],
    date: {
      type: Date,
      required: true,
      default: Date.now()
    },
    createdAt: {},
    updatedAt: {}
  },
  {
    timestamps: true
  }
)

export const TransactionModel: Model<ITransactionEntity> = model<ITransactionEntity>('Transactions', transactionSchema)
