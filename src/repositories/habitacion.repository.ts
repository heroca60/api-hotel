import {DefaultCrudRepository} from '@loopback/repository';
import {Habitacion, HabitacionRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HabitacionRepository extends DefaultCrudRepository<
  Habitacion,
  typeof Habitacion.prototype.idhabitacion,
  HabitacionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Habitacion, dataSource);
  }
}
