import { DefaultTransactionalRepository, juggler } from '@loopback/repository';
import { Detalle, DetalleRelations } from '../models';
import { inject } from '@loopback/core';

export class DetalleRepository extends DefaultTransactionalRepository<
  Detalle,
  typeof Detalle.prototype.iddetalle,
  DetalleRelations
  > {
  constructor(
    @inject('datasources.mysql') protected db: juggler.DataSource,
  ) {
    super(Detalle, db);
  }
}
