import {DefaultCrudRepository} from '@loopback/repository';
import {Habitacionservicio, HabitacionservicioRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HabitacionservicioRepository extends DefaultCrudRepository<
  Habitacionservicio,
  typeof Habitacionservicio.prototype.idhabitacionservicio,
  HabitacionservicioRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Habitacionservicio, dataSource);
  }
}
