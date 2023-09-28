import { Double, UUID } from "mongodb"
import { Schema, model } from "mongoose"

interface ITransaction {
  transactionId: UUID
  userId: UUID
  name: string
  valueCents: Number
  categoryId: UUID
  date: Date
  createdAt: Date
  updatedAt: Date
}

const transactionSchema = new Schema<ITransaction> (
  {
    transactionId: {
      type: Schema.Types.UUID,
      index: true,
      required: true
    },
    userId: {
      type: Schema.Types.UUID,
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
    categoryId: {
      type: Schema.Types.UUID,
      required: false
    },
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

export const TransactionModel = model<ITransaction>('Transactions', transactionSchema)
