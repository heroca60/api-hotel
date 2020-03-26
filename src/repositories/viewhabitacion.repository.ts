import {DefaultCrudRepository} from '@loopback/repository';
import {Viewhabitacion, ViewhabitacionRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ViewhabitacionRepository extends DefaultCrudRepository<
  Viewhabitacion,
  typeof Viewhabitacion.prototype.idhabitacion,
  ViewhabitacionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Viewhabitacion, dataSource);
  }
}
