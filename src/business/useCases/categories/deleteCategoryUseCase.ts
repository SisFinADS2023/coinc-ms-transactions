import { injectable, inject } from 'inversify'

import { left, right } from '../../../framework/shared/either'
import { IUseCase } from '../iUseCase'
import { InputDeleteCategoryDto, OutputDeleteCategoryDto } from '../../dto/categoryDto'
import { CategoryDeleteFailed, CategoryNotFound } from '../../module/errors/categories'
import { ICategoryRepository, ICategoryRepositoryToken } from '../../repositories/iCategoryRepository'

@injectable()
export class DeleteCategoryUseCase implements IUseCase<InputDeleteCategoryDto, OutputDeleteCategoryDto> {
  public constructor(@inject(ICategoryRepositoryToken) private categoryRepository: ICategoryRepository) {}

  async exec(input: InputDeleteCategoryDto): Promise<OutputDeleteCategoryDto> {
    try {
        const categoryResult = await this.categoryRepository.delete(input.categoryId)
        if(!categoryResult) {
            return left(CategoryNotFound)
        }
        return right(categoryResult)
    } catch (error) {
      return left(CategoryDeleteFailed)
    }
  }
}