import { injectable, inject } from 'inversify'

import { left, right } from '../../framework/shared/either'
import { IUseCase } from './iUseCase'
import { InputCreateCategoryDto, OutputCreateCategoryDto } from '../dto/categoryDto'
import { CategoryCreationFailed } from '../module/errors/categories'
import { ICategoryRepository, ICategoryRepositoryToken } from '../repositories/iCategoryRepository'

@injectable()
export class CreateCategoryUseCase implements IUseCase<InputCreateCategoryDto, OutputCreateCategoryDto> {
  public constructor(@inject(ICategoryRepositoryToken) private categoryRepository: ICategoryRepository) {}

  async exec(input: InputCreateCategoryDto): Promise<OutputCreateCategoryDto> {
    try {
      const category = await this.categoryRepository.create(input)
      console.log('category => ', category)
      
      return right(category)
    } catch (error) {
      return left(CategoryCreationFailed)
    }
  }
}
