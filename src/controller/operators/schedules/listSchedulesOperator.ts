import { inject, injectable } from "inversify"

import { AbstractOperator } from "../abstractOperator"
import { left, right } from "../../../framework/shared/either"
import { InputListSchedules, OutputListSchedules } from "../../serializers/schedules/inputListSchedules"
import { ListSchedulesUseCase } from "../../../business/useCases/schedules/ListSchedulesUseCase"

@injectable()
export class ListSchedulesOperator extends AbstractOperator<InputListSchedules, OutputListSchedules> {
  public constructor(@inject(ListSchedulesUseCase) private listSchedulesUseCase: ListSchedulesUseCase) {
    super()
  }

  protected async run(input: InputListSchedules): Promise<OutputListSchedules> {
    const result = await this.listSchedulesUseCase.exec(input)

    if (result.isLeft()) {
      return left(result.value)
    }

    return right(result.value)
  }
}
