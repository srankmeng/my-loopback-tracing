import {Entity, property} from '@loopback/repository'

export class SoftDeleteEntity extends Entity {
  @property({
    type: 'string',
    default: 'system',
  })
  create_by: string
  @property({
    type: 'date',
  })
  created_date: string
  @property({
    type: 'date',
  })
  updated_date: string
  @property({
    type: 'boolean',
    default: false,
  })
  deleted: boolean
}
