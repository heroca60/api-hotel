import {DefaultCrudRepository} from '@loopback/repository';
import {Viewdetalle, ViewdetalleRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ViewdetalleRepository extends DefaultCrudRepository<
  Viewdetalle,
  typeof Viewdetalle.prototype.iddetalle,
  ViewdetalleRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Viewdetalle, dataSource);
  }
}
