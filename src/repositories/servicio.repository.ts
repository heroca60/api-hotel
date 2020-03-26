import {DefaultCrudRepository} from '@loopback/repository';
import {Servicio, ServicioRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ServicioRepository extends DefaultCrudRepository<
  Servicio,
  typeof Servicio.prototype.idservicio,
  ServicioRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Servicio, dataSource);
  }
}
