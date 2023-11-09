import { injectable, inject } from 'inversify'

import { left, right } from '../../framework/shared/either'
import { AbstractOperator } from './abstractOperator'
import { UpdateCategoryUseCase } from '../../business/useCases/updateCategoryUseCase'
import { InputUpdateCategory, OutputUpdateCategory } from '../serializers/categories/inputUpdateCategory'

@injectable()
export class UpdateCategoryOperator extends AbstractOperator<InputUpdateCategory, OutputUpdateCategory> {
    public constructor(@inject(UpdateCategoryUseCase) private updateCategoryUseCase: UpdateCategoryUseCase) {
        super()
    }

    protected async run(input: InputUpdateCategory): Promise<OutputUpdateCategory> {
        const result = await this.updateCategoryUseCase.exec(input)

        if (result.isLeft()) {
        return left(result.value)
        }

        return right(result.value)
    }
}