import { injectable, inject } from 'inversify'

import { left, right } from '../../../framework/shared/either'
import { IUseCase } from '../iUseCase'
import { InputDeleteScheduleDto, OutputDeleteScheduleDto } from '../../dto/scheduleDto'
import { ScheduleDeleteFailed, ScheduleNotFound } from '../../module/errors/schedules'
import { IScheduleRepository, IScheduleRepositoryToken } from '../../repositories/iScheduleRepository'

@injectable()
export class DeleteScheduleUseCase implements IUseCase<InputDeleteScheduleDto, OutputDeleteScheduleDto> {
  public constructor(@inject(IScheduleRepositoryToken) private scheduleRepository: IScheduleRepository) {}

  async exec(input: InputDeleteScheduleDto): Promise<OutputDeleteScheduleDto> {
    try {
        const scheduleResult = await this.scheduleRepository.delete(input.scheduleId)
        if(!scheduleResult) {
            return left(ScheduleNotFound)
        }
        return right(scheduleResult)
    } catch (error) {
      return left(ScheduleDeleteFailed)
    }
  }
}