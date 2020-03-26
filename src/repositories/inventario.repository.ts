import { DefaultTransactionalRepository } from '@loopback/repository';
import { Inventario, InventarioRelations } from '../models';
import { MysqlDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class InventarioRepository extends DefaultTransactionalRepository<
  Inventario,
  typeof Inventario.prototype.idinventario,
  InventarioRelations
  > {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Inventario, dataSource);
  }
}
