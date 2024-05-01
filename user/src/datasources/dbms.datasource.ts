import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dbms',
  connector: 'postgresql',
  host: 'localhost',
  port: 5434,
  user: 'postgres',
  password: 'postgres',
  database: 'demo'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbmsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dbms';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dbms', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
