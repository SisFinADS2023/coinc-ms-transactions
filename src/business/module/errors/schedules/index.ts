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

export const SchedulesListFailed: IError = {
  code: 'SLF-005',
  message: 'Schedules list failed',
  shortMessage: 'schedulesListFailed'
}

export const SchedulesTriggerFailed = {
  code: 'STF-006',
  message: 'Schedules trigger failed',
  shortMessage: 'schedulesTriggerFailed'
}