import {DefaultCrudRepository} from '@loopback/repository';
import {Modulo, ModuloRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ModuloRepository extends DefaultCrudRepository<
  Modulo,
  typeof Modulo.prototype.idmodulo,
  ModuloRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Modulo, dataSource);
  }
}
