import { injectable, inject } from 'inversify'

import { left, right } from '../../framework/shared/either'
import { AbstractOperator } from './abstractOperator'
import { DeleteCategoryUseCase } from '../../business/useCases/deleteCategoryUseCase'
import { InputDeleteCategory, OutputDeleteCategory } from '../serializers/inputDeleteCategory'

@injectable()
export class DeleteCategoryOperator extends AbstractOperator<InputDeleteCategory, OutputDeleteCategory> {
  public constructor(@inject(DeleteCategoryUseCase) private deleteTransactionUseCase: DeleteCategoryUseCase) {
    super()
  }
  
  protected async run(input: InputDeleteCategory): Promise<OutputDeleteCategory> {
    const result = await this.deleteTransactionUseCase.exec(input)

    if (result.isLeft()) {
      return left(result.value)
    }

    return right(result.value)
  }
}