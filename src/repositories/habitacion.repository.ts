import { DefaultTransactionalRepository, juggler } from '@loopback/repository';
import { Habitacion, HabitacionRelations } from '../models';
import { inject } from '@loopback/core';

export class HabitacionRepository extends DefaultTransactionalRepository<
  Habitacion,
  typeof Habitacion.prototype.idhabitacion,
  HabitacionRelations
  > {
  constructor(
    @inject('datasources.mysql') protected db: juggler.DataSource,
  ) {
    super(Habitacion, db);
  }
}
