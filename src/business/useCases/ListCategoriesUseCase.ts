import { injectable, inject } from 'inversify'

import { IUseCase } from './iUseCase'
import { left, right } from '../../framework/shared/either'
import { ICategoryRepository, ICategoryRepositoryToken } from '../repositories/iCategoryRepository'
import { InputListCategoriesDto, OutputListCategoriesDto } from '../dto/listCategoriesDto'
import { CategoriesListFailed } from '../module/errors/categories'

@injectable()
export class ListCategoriesUseCase implements IUseCase<InputListCategoriesDto, OutputListCategoriesDto> {
    public constructor(@inject(ICategoryRepositoryToken) private categoryRepository: ICategoryRepository) {}

    async exec(input: InputListCategoriesDto): Promise<OutputListCategoriesDto> {
        try {
            const categoryResult = await this.categoryRepository.list(input)

            return right(categoryResult)
        } catch (error) {
            return left(CategoriesListFailed)
        }
    }
}