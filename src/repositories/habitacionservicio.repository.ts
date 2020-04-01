import { DefaultTransactionalRepository, juggler } from '@loopback/repository';
import { Habitacionservicio, HabitacionservicioRelations } from '../models';
import { inject } from '@loopback/core';

export class HabitacionservicioRepository extends DefaultTransactionalRepository<
  Habitacionservicio,
  typeof Habitacionservicio.prototype.idhabitacionservicio,
  HabitacionservicioRelations
  > {
  constructor(
    @inject('datasources.mysql') protected db: juggler.DataSource,
  ) {
    super(Habitacionservicio, db);
  }
}
