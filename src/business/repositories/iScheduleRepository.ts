import { IScheduleEntity } from "../../domain/entities/scheduleEntity";

export const IScheduleRepositoryToken = Symbol.for('IScheduleRepository')

export interface IScheduleRepository {
  create(scheduleEntity: IScheduleEntity): Promise<IScheduleEntity>
}
