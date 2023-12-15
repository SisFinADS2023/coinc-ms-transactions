import { IsNotEmpty, IsOptional, IsString, IsDate, IsNumber, IsMongoId } from 'class-validator'

import { ITransactionEntity } from '../../../domain/entities/transactionEntity'
import { Either } from '../../../framework/shared/either'
import { IError } from '../../../framework/shared/iError'
import { Validatable } from '../abstractValidatable'

export class InputUpdateTransaction extends Validatable<InputUpdateTransaction> {
    @IsOptional()
    @IsMongoId()
    bankAccountId?: string
  
    @IsNotEmpty()
    @IsMongoId()
    transactionId!: string
  
    @IsOptional()
    @IsString()
    name?: string
  
    @IsOptional()
    @IsNumber()
    valueCents?: Number
  
    @IsOptional()
    @IsMongoId({ each : true })
    categories?: [string]
  
    @IsOptional()
    @IsDate()
    date?: Date
}

export type OutputUpdateTransaction = Either<IError, ITransactionEntity>