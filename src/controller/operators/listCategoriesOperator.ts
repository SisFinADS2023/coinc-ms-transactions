import { inject, injectable } from "inversify"

import { AbstractOperator } from "./abstractOperator"
import { left, right } from "../../framework/shared/either"
import { InputListCategories, OutputListCategories } from "../serializers/inputListCategories"
import { ListCategoriesUseCase } from "../../business/useCases/ListCategoriesUseCase"

@injectable()
export class ListCategoriesOperator extends AbstractOperator<InputListCategories, OutputListCategories> {
    public constructor(@inject(ListCategoriesUseCase) private listCategoriesUseCase: ListCategoriesUseCase) {
        super()
    }

    protected async run(input: InputListCategories): Promise<OutputListCategories> {
        const result = await this.listCategoriesUseCase.exec(input)

        if (result.isLeft()) {
            return left(result.value)
        }

        return right(result.value)
    }
}