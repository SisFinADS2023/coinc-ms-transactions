import { IError } from "../../../../framework/shared/iError"

export const ScheduleCreationFailed = {
  code: 'SCF-001',
  message: 'Schedule creation failed',
  shortMessage: 'scheduleCreationFailed'
}

export const ScheduleDeleteFailed = {
  code: 'SDF-002',
  message: 'Schedule delete failed',
  shortMessage: 'scheduleDeleteFailed'
}

export const ScheduleNotFound = {
  code: 'SNF-003',
  message: 'Schedule Not Found',
  shortMessage: 'scheduleNotFound'
}

export const ScheduleUpdateFailed = {
  code: 'SUF-004',
  message: 'Schedule update Failed',
  shortMessage: 'scheduleUpdateFailed'
}

export const SchedulesListFailed: IError = {
  code: 'TLF-005',
  message: 'Transactions list failed',
  shortMessage: 'transactionsListFailed'
}