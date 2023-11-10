import { injectable, inject } from 'inversify'

import { left, right } from '../../../framework/shared/either'
import { IUseCase } from '../iUseCase'
import { InputCreateScheduleDto, OutputCreateScheduleDto } from '../../dto/scheduleDto'
import { ScheduleCreationFailed } from '../../module/errors/schedules'
import { IScheduleRepository, IScheduleRepositoryToken } from '../../repositories/iScheduleRepository'
import { ICategoryRepository, ICategoryRepositoryToken } from '../../repositories/iCategoryRepository'
import { CategoryNotFound } from '../../module/errors/categories'

@injectable()
export class CreateScheduleUseCase implements IUseCase<InputCreateScheduleDto, OutputCreateScheduleDto> {
  public constructor(
    @inject(IScheduleRepositoryToken) private scheduleRepository: IScheduleRepository,
    @inject(ICategoryRepositoryToken) private categoryRepository: ICategoryRepository
  ) {}

  async exec(input: InputCreateScheduleDto): Promise<OutputCreateScheduleDto> {
    try {
      if (input.transaction.categories) {
        const validCategories = await this.categoryRepository.validate(input.transaction.categories)
        if (!validCategories) return left(CategoryNotFound)
      }

      const schedule = await this.scheduleRepository.create(input)
      console.log('schedule => ', schedule)
      
      return right(schedule)
    } catch (error) {
      return left(ScheduleCreationFailed)
    }
  }
}
