import { DefaultCrudRepository } from '@loopback/repository';
import { Viewhabitacionservicio, ViewhabitacionservicioRelations } from '../models';
import { MysqlDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ViewhabitacionservicioRepository extends DefaultCrudRepository<
  Viewhabitacionservicio,
  typeof Viewhabitacionservicio.prototype.idhabitacionservicio,
  ViewhabitacionservicioRelations
  > {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Viewhabitacionservicio, dataSource);
  }
}
