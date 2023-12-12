import { IError } from "../../../../framework/shared/iError"

export const ScheduleCreationFailed = {
  code: 'SCF-001',
  message: 'Schedule creation failed',
  shortMessage: 'scheduleCreationFailed'
}

export const ScheduleGetFailed = {
  code: 'SGF-002',
  message: 'Schedule Get Failed',
  shortMessage: 'scheduleGetFailed'
}

export const ScheduleDeleteFailed = {
  code: 'SDF-003',
  message: 'Schedule delete failed',
  shortMessage: 'scheduleDeleteFailed'
}

export const ScheduleNotFound = {
  code: 'SNF-004',
  message: 'Schedule Not Found',
  shortMessage: 'scheduleNotFound'
}

export const ScheduleUpdateFailed = {
  code: 'SUF-005',
  message: 'Schedule update Failed',
  shortMessage: 'scheduleUpdateFailed'
}

export const SchedulesListFailed: IError = {
  code: 'SLF-006',
  message: 'Schedules list failed',
  shortMessage: 'schedulesListFailed'
}

export const SchedulesTriggerFailed = {
  code: 'STF-008',
  message: 'Schedules trigger failed',
  shortMessage: 'schedulesTriggerFailed'
}
