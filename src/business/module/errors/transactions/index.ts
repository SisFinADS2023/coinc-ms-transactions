import { IError } from "../../../../framework/shared/iError"

export const TransactionCreationFailed = {
  code: 'TCF-001',
  message: 'Transaction creation failed',
  shortMessage: 'transactionCreationFailed'
}

export const TransactionGetFailed = {
  code: 'TGF-002',
  message: 'Transaction Get failed',
  shortMessage: 'transactionGetFailed'
}

export const TransactionDeleteFailed = {
  code: 'TDF-003',
  message: 'Transaction delete failed',
  shortMessage: 'transactionDeleteFailed'
}

export const TransactionNotFound = {
  code: 'TNF-004',
  message: 'Transaction Not Found',
  shortMessage: 'transactionNotFound'
}

export const TransactionsListFailed: IError = {
  code: 'TLF-005',
  message: 'Transactions list failed',
  shortMessage: 'transactionsListFailed'
}

export const TransactionUpdateFailed = {
  code: 'TUF-001',
  message: 'Transaction update failed',
  shortMessage: 'transactionUpdateFailed'
}