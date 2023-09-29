import { Schema, model, ObjectId } from "mongoose"

interface ITransaction {
  userId: ObjectId
  name: String
  valueCents: Number
  categoryId: ObjectId
  date: Date
  createdAt: Date
  updatedAt: Date
}

const transactionSchema = new Schema<ITransaction> (
  {
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
    categoryId: {
      type: String,
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
