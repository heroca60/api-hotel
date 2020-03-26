import {DefaultCrudRepository} from '@loopback/repository';
import {Viewinventario, ViewinventarioRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ViewinventarioRepository extends DefaultCrudRepository<
  Viewinventario,
  typeof Viewinventario.prototype.idinventario,
  ViewinventarioRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Viewinventario, dataSource);
  }
}
