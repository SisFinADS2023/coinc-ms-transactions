import { injectable, inject } from 'inversify'

import { left, right } from '../../../framework/shared/either'
import { AbstractOperator } from '../abstractOperator'
import { CreateCategoryUseCase } from '../../../business/useCases/categories/createCategoryUseCase'
import { InputCreateCategory, OutputCreateCategory } from '../../serializers/categories/inputCreateCategory'

@injectable()
export class CreateCategoryOperator extends AbstractOperator<InputCreateCategory, OutputCreateCategory> {
  public constructor(@inject(CreateCategoryUseCase) private createCategoryUseCase: CreateCategoryUseCase) {
    super()
  }

  protected async run(input: InputCreateCategory): Promise<OutputCreateCategory> {
    const result = await this.createCategoryUseCase.exec(input)

    if (result.isLeft()) {
      return left(result.value)
    }

    return right(result.value)
  }
}
