import { injectable, inject } from 'inversify'

import { left, right } from '../../../framework/shared/either'
import { IUseCase } from '../iUseCase'
import { InputUpdateScheduleDto, OutputUpdateScheduleDto } from '../../dto/scheduleDto'
import { ScheduleUpdateFailed, ScheduleNotFound } from '../../module/errors/schedules'
import { IScheduleRepository, IScheduleRepositoryToken } from '../../repositories/iScheduleRepository'

@injectable()
export class UpdateScheduleUseCase implements IUseCase<InputUpdateScheduleDto, OutputUpdateScheduleDto> {
    public constructor(@inject(IScheduleRepositoryToken) private scheduleRepository: IScheduleRepository) {}

    async exec(input: InputUpdateScheduleDto): Promise<OutputUpdateScheduleDto> {
        try {
            const schedule = await this.scheduleRepository.update(input)
            if(!schedule){
                return left(ScheduleNotFound)
            } else {
                console.log('schedule =>', schedule)
            }

            return right(schedule)
        } catch (error) {
            return left(ScheduleUpdateFailed)
        }
    }
}