import {Model, model, property} from '@loopback/repository';
import { SoftDeleteEntity } from '../mixins';

@model({settings: {table: 'coop'}})
export class Coop extends SoftDeleteEntity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number

  @property({
    type: 'string',
  })
  name?: string

  @property({
    type: 'string',
    default: 'USER_CPP01',
  })
  requester: string

  @property({
    type: 'string',
    default: 'USER_CPP02',
  })
  approver: string

  @property({
    type: 'string',
  })
  coop_code?: string

  @property({type: 'object'})
  cc_email?: string[]

  @property({
    type: 'string',
  })
  cv_flag?: string

  @property({
    type: 'string',
  })
  pur_org?: string

  @property({
    type: 'string',
  })
  warehouse?: string

  @property({
    type: 'string',
  })
  sub_warehouse?: string

  @property({
    type: 'string',
  })
  spc_price?: string

  @property({
    type: 'string',
  })
  sale_org?: string

  @property({
    type: 'string',
  })
  sale_warehouse?: string

  @property({
    type: 'string',
  })
  sale_sub_warehouse?: string

  @property({
    type: 'string',
  })
  saleman?: string

  @property({
    type: 'string',
  })
  area_code?: string

  @property({
    type: 'string',
  })
  sale_spc_price?: string

  @property({
    type: 'number',
  })
  credit_term?: number

  @property({
    type: 'string',
  })
  credit_authority?: string

  @property({
    type: 'string',
  })
  phone_number?: string

  @property({
    type: 'number',
  })
  company_id?: number

  constructor(data?: Partial<Coop>) {
    super(data)
  }
}

export interface CoopRelations {
  // describe navigational properties here
}

export type CoopWithRelations = Coop & CoopRelations;
