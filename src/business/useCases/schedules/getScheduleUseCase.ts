import { injectable, inject } from 'inversify'

import { left, right } from '../../../framework/shared/either'
import { IUseCase } from '../iUseCase'
import { InputGetScheduleDto, OutputGetScheduleDto } from '../../dto/scheduleDto'
import { ScheduleGetFailed, ScheduleNotFound } from '../../module/errors/schedules'
import { IScheduleRepository, IScheduleRepositoryToken } from '../../repositories/iScheduleRepository'

@injectable()
export class GetScheduleUseCase implements IUseCase<InputGetScheduleDto, OutputGetScheduleDto> {
    public constructor(@inject(IScheduleRepositoryToken) private scheduleRepository: IScheduleRepository) {}

    async exec(input: InputGetScheduleDto): Promise<OutputGetScheduleDto> {
        try {
            const scheduleResult = await this.scheduleRepository.get(input.scheduleId)
            console.log('schedule::result => ', scheduleResult)

            if(!scheduleResult) {
                return left(ScheduleNotFound)
            }

            return right(scheduleResult)
        } catch (error) {
            return left(ScheduleGetFailed)
        }
    }
}