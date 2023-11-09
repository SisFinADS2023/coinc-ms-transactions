import { injectable, inject } from 'inversify'

import { left, right } from '../../framework/shared/either'
import { IUseCase } from './iUseCase'
import { InputUpdateCategoryDto, OutputUpdateCategoryDto } from '../dto/categoryDto'
import { CategoryUpdateFailed, CategoryNotFound } from '../module/errors/categories'
import { ICategoryRepository, ICategoryRepositoryToken } from '../repositories/iCategoryRepository'

@injectable()
export class UpdateCategoryUseCase implements IUseCase<InputUpdateCategoryDto, OutputUpdateCategoryDto> {
    public constructor(@inject(ICategoryRepositoryToken) private categoryRepository: ICategoryRepository) {}

    async exec(input: InputUpdateCategoryDto): Promise<OutputUpdateCategoryDto> {
        try {
            const category = await this.categoryRepository.update(input)
            if(!category){
                return left(CategoryNotFound)
            } else {
                console.log('category => ', category)
            }
      
            return right(category)
        } catch (error) {
            return left(CategoryUpdateFailed)
        }
    }
}