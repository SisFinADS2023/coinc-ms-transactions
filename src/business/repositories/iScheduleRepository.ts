import { IScheduleEntity } from "../../domain/entities/scheduleEntity";
import { InputListSchedulesDto } from "../dto/schedules/listSchedulesDto";

export const IScheduleRepositoryToken = Symbol.for('IScheduleRepository')

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export interface IScheduleRepository {
  create(scheduleEntity: IScheduleEntity): Promise<IScheduleEntity>
  delete(scheduleId: string): Promise<boolean>
  update(scheduleEntity: RecursivePartial<IScheduleEntity>): Promise<IScheduleEntity>
  list(props: InputListSchedulesDto): Promise<IScheduleEntity[]>
}
