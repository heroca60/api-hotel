import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Hotel} from '../models';
import {HotelRepository} from '../repositories';

export class HotelController {
  constructor(
    @repository(HotelRepository)
    public hotelRepository : HotelRepository,
  ) {}

  @post('/hotels', {
    responses: {
      '200': {
        description: 'Hotel model instance',
        content: {'application/json': {schema: getModelSchemaRef(Hotel)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hotel, {
            title: 'NewHotel',
            exclude: ['idhotel'],
          }),
        },
      },
    })
    hotel: Omit<Hotel, 'idhotel'>,
  ): Promise<Hotel> {
    return this.hotelRepository.create(hotel);
  }

  @get('/hotels/count', {
    responses: {
      '200': {
        description: 'Hotel model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Hotel)) where?: Where<Hotel>,
  ): Promise<Count> {
    return this.hotelRepository.count(where);
  }

  @get('/hotels', {
    responses: {
      '200': {
        description: 'Array of Hotel model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Hotel, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Hotel)) filter?: Filter<Hotel>,
  ): Promise<Hotel[]> {
    return this.hotelRepository.find(filter);
  }

  @patch('/hotels', {
    responses: {
      '200': {
        description: 'Hotel PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hotel, {partial: true}),
        },
      },
    })
    hotel: Hotel,
    @param.query.object('where', getWhereSchemaFor(Hotel)) where?: Where<Hotel>,
  ): Promise<Count> {
    return this.hotelRepository.updateAll(hotel, where);
  }

  @get('/hotels/{id}', {
    responses: {
      '200': {
        description: 'Hotel model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Hotel, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Hotel)) filter?: Filter<Hotel>
  ): Promise<Hotel> {
    return this.hotelRepository.findById(id, filter);
  }

  @patch('/hotels/{id}', {
    responses: {
      '204': {
        description: 'Hotel PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hotel, {partial: true}),
        },
      },
    })
    hotel: Hotel,
  ): Promise<void> {
    await this.hotelRepository.updateById(id, hotel);
  }

  @put('/hotels/{id}', {
    responses: {
      '204': {
        description: 'Hotel PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() hotel: Hotel,
  ): Promise<void> {
    await this.hotelRepository.replaceById(id, hotel);
  }

  @del('/hotels/{id}', {
    responses: {
      '204': {
        description: 'Hotel DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.hotelRepository.deleteById(id);
  }
}
