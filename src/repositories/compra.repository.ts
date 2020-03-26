import {DefaultCrudRepository} from '@loopback/repository';
import {Compra, CompraRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompraRepository extends DefaultCrudRepository<
  Compra,
  typeof Compra.prototype.idcompra,
  CompraRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Compra, dataSource);
  }
}
