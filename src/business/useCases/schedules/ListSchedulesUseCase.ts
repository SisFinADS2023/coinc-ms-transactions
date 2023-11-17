import { injectable, inject } from 'inversify'

import { IUseCase } from '../iUseCase'
import { left, right } from '../../../framework/shared/either'
import { IScheduleRepository, IScheduleRepositoryToken } from '../../repositories/iScheduleRepository'
import { InputListSchedulesDto, OutputListSchedulesDto } from '../../dto/schedules/listSchedulesDto'
import { SchedulesListFailed } from '../../module/errors/schedules'

@injectable()
export class ListSchedulesUseCase implements IUseCase<InputListSchedulesDto, OutputListSchedulesDto> {
  public constructor(@inject(IScheduleRepositoryToken) private scheduleRepository: IScheduleRepository) {}

  async exec(input: InputListSchedulesDto): Promise<OutputListSchedulesDto> {
    try {
      console.log({ input })
      const scheduleResult = await this.scheduleRepository.list(input)

      return right(scheduleResult)
    } catch (error) {
      console.log('ListSchedulesUseCase::Error => ', error)

      return left(SchedulesListFailed)
    }
  }
}
