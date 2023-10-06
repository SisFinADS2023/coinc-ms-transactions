import { injectable, inject } from 'inversify'

import { left, right } from '../../framework/shared/either'
import { IUseCase } from './iUseCase'
import { InputDeleteCategoryDto, OutputDeleteCategoryDto } from '../dto/categoryDto'
import { CategoryDeleteFailed, CategoryNotFound } from '../module/errors/categories'
import { ICategoryRepository, ICategoryRepositoryToken } from '../repositories/iCategoryRepository'

@injectable()
export class DeleteCategoryUseCase implements IUseCase<InputDeleteCategoryDto, OutputDeleteCategoryDto> {
  public constructor(@inject(ICategoryRepositoryToken) private transactionRepository: ICategoryRepository) {}

  async exec(input: InputDeleteCategoryDto): Promise<OutputDeleteCategoryDto> {
    try {
        const transactionResult = await this.transactionRepository.delete(input.categoryId)
        if(!transactionResult) {
            return left(CategoryNotFound)
        }
        return right(transactionResult)
    } catch (error) {
      return left(CategoryDeleteFailed)
    }
  }
}