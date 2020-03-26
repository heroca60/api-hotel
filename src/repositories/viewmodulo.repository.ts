import {DefaultCrudRepository} from '@loopback/repository';
import {Viewmodulo, ViewmoduloRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ViewmoduloRepository extends DefaultCrudRepository<
  Viewmodulo,
  typeof Viewmodulo.prototype.idmodulo,
  ViewmoduloRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Viewmodulo, dataSource);
  }
}
