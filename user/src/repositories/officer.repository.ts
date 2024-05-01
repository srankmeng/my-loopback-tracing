import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbmsDataSource} from '../datasources';
import {Officer, OfficerRelations} from '../models';

export class OfficerRepository extends DefaultCrudRepository<
  Officer,
  typeof Officer.prototype.id,
  OfficerRelations
> {
  constructor(
    @inject('datasources.dbms') dataSource: DbmsDataSource,
  ) {
    super(Officer, dataSource);
  }
}
