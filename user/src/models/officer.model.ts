import {model, property} from '@loopback/repository';
import { SoftDeleteEntity } from '../mixins';
import { AutoMap } from '@automapper/classes';

@model()
export class Officer extends SoftDeleteEntity {
  @AutoMap()
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string

  @AutoMap()
  @property({type: 'string'})
  display_name?: string

  @AutoMap()
  @property({type: 'string'})
  email: string

  @AutoMap()
  @property({type: 'string'})
  image_key?: string

  @AutoMap()
  @property({type: 'string'})
  firstname?: string

  @AutoMap()
  @property({type: 'string'})
  lastname?: string

  @AutoMap()
  @property({type: 'string'})
  tel?: string

  @AutoMap()
  @property({type: 'string', default: 'general'})
  role: string

  @AutoMap()
  @property({type: 'number', default: 1})
  country_id?: number

  @AutoMap()
  @property({type: 'number', default: 1})
  language_id?: number

  @AutoMap()
  @property({type: 'number', default: 1})
  currency_id?: number

  @AutoMap()
  @property({type: 'date'})
  last_active_date?: string /* track when officer comes to our app */

  @AutoMap()
  @property({type: 'string'})
  saleman_code?: string

  @AutoMap()
  @property({type: 'boolean', default: true})
  is_active?: boolean

  @AutoMap()
  @property({type: 'boolean', default: false})
  is_select_all_coop?: boolean

  constructor(data?: Partial<Officer>) {
    super(data)
  }
}

export interface OfficerRelations {
  // describe navigational properties here
}

export type OfficerWithRelations = Officer & OfficerRelations;
