import { DefaultTransactionalRepository, juggler } from '@loopback/repository';
import { Habitacioninventario, HabitacioninventarioRelations } from '../models';
import { inject } from '@loopback/core';

export class HabitacioninventarioRepository extends DefaultTransactionalRepository<
  Habitacioninventario,
  typeof Habitacioninventario.prototype.idhabitacioninventario,
  HabitacioninventarioRelations
  > {
  constructor(
    @inject('datasources.mysql') protected db: juggler.DataSource
  ) {
    super(Habitacioninventario, db);
  }
}
