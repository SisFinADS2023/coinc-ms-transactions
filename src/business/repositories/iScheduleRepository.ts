import { IScheduleEntity } from "../../domain/entities/scheduleEntity";
import { InputListSchedulesDto } from "../dto/schedules/listSchedulesDto";

export const IScheduleRepositoryToken = Symbol.for('IScheduleRepository')

export interface IScheduleRepository {
  create(scheduleEntity: IScheduleEntity): Promise<IScheduleEntity>
  list(props: InputListSchedulesDto): Promise<IScheduleEntity[]>
}
