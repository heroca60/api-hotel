import {DefaultCrudRepository} from '@loopback/repository';
import {Tipo, TipoRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TipoRepository extends DefaultCrudRepository<
  Tipo,
  typeof Tipo.prototype.idtipo,
  TipoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tipo, dataSource);
  }
}
