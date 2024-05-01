import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbmsDataSource} from '../datasources';
import {Coop, CoopRelations} from '../models';

export class CoopRepository extends DefaultCrudRepository<
  Coop,
  typeof Coop.prototype.id,
  CoopRelations
> {
  constructor(
    @inject('datasources.dbms') dataSource: DbmsDataSource,
  ) {
    super(Coop, dataSource);
  }
}
