import {DefaultCrudRepository} from '@loopback/repository';
import {Hotel, HotelRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HotelRepository extends DefaultCrudRepository<
  Hotel,
  typeof Hotel.prototype.idhotel,
  HotelRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Hotel, dataSource);
  }
}
