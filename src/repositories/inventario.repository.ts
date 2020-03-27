import { DefaultTransactionalRepository, juggler } from '@loopback/repository';
import { Inventario, InventarioRelations } from '../models';
import { inject } from '@loopback/core';

export class InventarioRepository extends DefaultTransactionalRepository<
  Inventario,
  typeof Inventario.prototype.idinventario,
  InventarioRelations
  > {
  constructor(
    @inject('datasources.mysql') protected db: juggler.DataSource,
  ) {
    super(Inventario, db);
  }
}
