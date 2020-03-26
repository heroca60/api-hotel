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
import {Detalle} from '../models';
import {DetalleRepository} from '../repositories';

export class DetalleController {
  constructor(
    @repository(DetalleRepository)
    public detalleRepository : DetalleRepository,
  ) {}

  @post('/detalles', {
    responses: {
      '200': {
        description: 'Detalle model instance',
        content: {'application/json': {schema: getModelSchemaRef(Detalle)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Detalle, {
            title: 'NewDetalle',
            exclude: ['iddetalle'],
          }),
        },
      },
    })
    detalle: Omit<Detalle, 'iddetalle'>,
  ): Promise<Detalle> {
    return this.detalleRepository.create(detalle);
  }

  @get('/detalles/count', {
    responses: {
      '200': {
        description: 'Detalle model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Detalle)) where?: Where<Detalle>,
  ): Promise<Count> {
    return this.detalleRepository.count(where);
  }

  @get('/detalles', {
    responses: {
      '200': {
        description: 'Array of Detalle model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Detalle, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Detalle)) filter?: Filter<Detalle>,
  ): Promise<Detalle[]> {
    return this.detalleRepository.find(filter);
  }

  @patch('/detalles', {
    responses: {
      '200': {
        description: 'Detalle PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Detalle, {partial: true}),
        },
      },
    })
    detalle: Detalle,
    @param.query.object('where', getWhereSchemaFor(Detalle)) where?: Where<Detalle>,
  ): Promise<Count> {
    return this.detalleRepository.updateAll(detalle, where);
  }

  @get('/detalles/{id}', {
    responses: {
      '200': {
        description: 'Detalle model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Detalle, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Detalle)) filter?: Filter<Detalle>
  ): Promise<Detalle> {
    return this.detalleRepository.findById(id, filter);
  }

  @get('/detalles/{idcompra}', {
    responses: {
      '200': {
        description: 'Detalle model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Detalle, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findByIdCompra(
    @param.path.number('idcompra') idcompra: number,
    @param.query.object('filter', getFilterSchemaFor(Detalle)) filter?: Filter<Detalle>
  ): Promise<Detalle> {
    return this.detalleRepository.findById(idcompra, filter);
  }

  @patch('/detalles/{id}', {
    responses: {
      '204': {
        description: 'Detalle PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Detalle, {partial: true}),
        },
      },
    })
    detalle: Detalle,
  ): Promise<void> {
    await this.detalleRepository.updateById(id, detalle);
  }

  @put('/detalles/{id}', {
    responses: {
      '204': {
        description: 'Detalle PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() detalle: Detalle,
  ): Promise<void> {
    await this.detalleRepository.replaceById(id, detalle);
  }

  @del('/detalles/{id}', {
    responses: {
      '204': {
        description: 'Detalle DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.detalleRepository.deleteById(id);
  }
}
