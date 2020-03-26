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
import {Servicio} from '../models';
import {ServicioRepository} from '../repositories';

export class ServicioController {
  constructor(
    @repository(ServicioRepository)
    public servicioRepository : ServicioRepository,
  ) {}

  @post('/servicios', {
    responses: {
      '200': {
        description: 'Servicio model instance',
        content: {'application/json': {schema: getModelSchemaRef(Servicio)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Servicio, {
            title: 'NewServicio',
            exclude: ['idservicio'],
          }),
        },
      },
    })
    servicio: Omit<Servicio, 'idservicio'>,
  ): Promise<Servicio> {
    return this.servicioRepository.create(servicio);
  }

  @get('/servicios/count', {
    responses: {
      '200': {
        description: 'Servicio model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Servicio)) where?: Where<Servicio>,
  ): Promise<Count> {
    return this.servicioRepository.count(where);
  }

  @get('/servicios', {
    responses: {
      '200': {
        description: 'Array of Servicio model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Servicio, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Servicio)) filter?: Filter<Servicio>,
  ): Promise<Servicio[]> {
    return this.servicioRepository.find(filter);
  }

  @patch('/servicios', {
    responses: {
      '200': {
        description: 'Servicio PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Servicio, {partial: true}),
        },
      },
    })
    servicio: Servicio,
    @param.query.object('where', getWhereSchemaFor(Servicio)) where?: Where<Servicio>,
  ): Promise<Count> {
    return this.servicioRepository.updateAll(servicio, where);
  }

  @get('/servicios/{id}', {
    responses: {
      '200': {
        description: 'Servicio model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Servicio, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Servicio)) filter?: Filter<Servicio>
  ): Promise<Servicio> {
    return this.servicioRepository.findById(id, filter);
  }

  @patch('/servicios/{id}', {
    responses: {
      '204': {
        description: 'Servicio PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Servicio, {partial: true}),
        },
      },
    })
    servicio: Servicio,
  ): Promise<void> {
    await this.servicioRepository.updateById(id, servicio);
  }

  @put('/servicios/{id}', {
    responses: {
      '204': {
        description: 'Servicio PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() servicio: Servicio,
  ): Promise<void> {
    await this.servicioRepository.replaceById(id, servicio);
  }

  @del('/servicios/{id}', {
    responses: {
      '204': {
        description: 'Servicio DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.servicioRepository.deleteById(id);
  }
}
