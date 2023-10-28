import   '../utility/database'

import { inject, injectable } from "inversify"
import { ScheduleModel } from '../models/scheduleModel'
import { IScheduleRepository } from '../../business/repositories/iScheduleRepository'
import { IScheduleEntity } from '../../domain/entities/scheduleEntity'

@injectable()
export class ScheduleRepository implements IScheduleRepository {
  public constructor(@inject(ScheduleModel) private scheduleModel: typeof ScheduleModel) {}

  async create(scheduleEntity: IScheduleEntity): Promise<IScheduleEntity> {
    let createResponse = await this.scheduleModel.create({
      _id: scheduleEntity.scheduleId,
      userId: scheduleEntity.userId,
      transaction: scheduleEntity.transaction,
      quantity: scheduleEntity.quantity,
      interval: scheduleEntity.interval,
      startDate: scheduleEntity.startDate,
      createdAt: scheduleEntity.createdAt,
      updatedAt: scheduleEntity.updatedAt
    })

    createResponse = await createResponse.populate({
      path: 'transaction',
      populate:({
        path: 'categories',
        select: 'id name icon color'
      })
    })

    console.log('create::response => ', createResponse)

    const createScheduleReturn = {
      _id: String(createResponse._id),
      userId: scheduleEntity.userId,
      transaction: createResponse.transaction,
      quantity: scheduleEntity.quantity,
      interval: scheduleEntity.interval,
      startDate: createResponse.startDate,
      createdAt: createResponse.createdAt,
      updatedAt: createResponse.updatedAt
    }

    return createScheduleReturn
  }
}
