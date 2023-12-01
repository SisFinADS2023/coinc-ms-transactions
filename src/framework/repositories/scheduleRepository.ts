import   '../utility/database'

import { inject, injectable } from "inversify"
import { ScheduleModel } from '../models/scheduleModel'
import { IScheduleRepository } from '../../business/repositories/iScheduleRepository'
import { IScheduleEntity } from '../../domain/entities/scheduleEntity'
import { InputListSchedulesDto } from '../../business/dto/schedules/listSchedulesDto'
import { endOfDay, startOfDay } from 'date-fns'

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

  async delete(scheduleId: String): Promise<boolean> {
    const deleteResponse = await this.scheduleModel.deleteOne({
      _id: scheduleId
    }).select('-__v')

    console.log('delete::response => ', deleteResponse.deletedCount)
    if (deleteResponse.deletedCount == 1) {
      return true
    }
    return false
  }

  async update(scheduleEntity: Partial<IScheduleEntity>): Promise<IScheduleEntity> {
    const updateResponse = await this.scheduleModel.findOneAndUpdate({_id: scheduleEntity.scheduleId}, {
      scheduleId: scheduleEntity.scheduleId,
      transaction: scheduleEntity.transaction,
      quantity: scheduleEntity.quantity,
      interval: scheduleEntity.interval,
      startDate: scheduleEntity.startDate
    }, {new: true}).select('-__v')

    console.log('update::response =>', updateResponse)

    return updateResponse as IScheduleEntity
  }
  
  async list(props: InputListSchedulesDto): Promise<IScheduleEntity[]> {
    let query = null

    if (props.startDate && props.endDate) {
      query = {
        date: {
          $gte: new Date(props.startDate),
          $lte: new Date(props.endDate)
        }
      }
    }

    if (props.type) {
      query = {
        ...query,
        valueCents: props.type === 'credit' ? { $gte: 0 } : { $lt: 0 }
      }
    }

    const getResponse = await this.scheduleModel.find({
      userId: props.userId,
      ...query
    }, null, {
      skip: props.perPage * (props.page - 1),
      limit: props.perPage,
      sort: {
        createdAt: props.orderBy ?? 'desc'
      }
    }).select("-__v")

    return getResponse as IScheduleEntity[]
  }

  async listAll(day: Date): Promise<IScheduleEntity[]> {
    const getResponse = await this.scheduleModel.find({
      startDate: {
        $gte: startOfDay(day),
        $lte: endOfDay(day)
      }
    }, null, {
      limit: 50
    }).select("-__v")

    return getResponse as IScheduleEntity[]
  }
}
