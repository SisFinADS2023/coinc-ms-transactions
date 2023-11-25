import { IScheduleEntity } from "../../domain/entities/scheduleEntity";
import { InputListSchedulesDto } from "../dto/schedules/listSchedulesDto";

export const IScheduleRepositoryToken = Symbol.for('IScheduleRepository')

export interface IScheduleRepository {
  create(scheduleEntity: IScheduleEntity): Promise<IScheduleEntity>
  delete(scheduleId: string): Promise<boolean>
  list(props: InputListSchedulesDto): Promise<IScheduleEntity[]>
  listAll(day: Date): Promise<IScheduleEntity[]>
}
