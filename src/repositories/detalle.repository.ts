import {DefaultCrudRepository} from '@loopback/repository';
import {Detalle, DetalleRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DetalleRepository extends DefaultCrudRepository<
  Detalle,
  typeof Detalle.prototype.iddetalle,
  DetalleRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Detalle, dataSource);
  }
}
