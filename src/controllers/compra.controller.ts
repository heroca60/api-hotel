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
import {Compra} from '../models';
import {CompraRepository} from '../repositories';

export class CompraController {
  constructor(
    @repository(CompraRepository)
    public compraRepository : CompraRepository,
  ) {}

  @post('/compras', {
    responses: {
      '200': {
        description: 'Compra model instance',
        content: {'application/json': {schema: getModelSchemaRef(Compra)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compra, {
            title: 'NewCompra',
            exclude: ['idcompra'],
          }),
        },
      },
    })
    compra: Omit<Compra, 'idcompra'>,
  ): Promise<Compra> {
    return this.compraRepository.create(compra);
  }

  @get('/compras/count', {
    responses: {
      '200': {
        description: 'Compra model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Compra)) where?: Where<Compra>,
  ): Promise<Count> {
    return this.compraRepository.count(where);
  }

  @get('/compras', {
    responses: {
      '200': {
        description: 'Array of Compra model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Compra, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Compra)) filter?: Filter<Compra>,
  ): Promise<Compra[]> {
    return this.compraRepository.find(filter);
  }

  @patch('/compras', {
    responses: {
      '200': {
        description: 'Compra PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compra, {partial: true}),
        },
      },
    })
    compra: Compra,
    @param.query.object('where', getWhereSchemaFor(Compra)) where?: Where<Compra>,
  ): Promise<Count> {
    return this.compraRepository.updateAll(compra, where);
  }

  @get('/compras/{id}', {
    responses: {
      '200': {
        description: 'Compra model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Compra, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Compra)) filter?: Filter<Compra>
  ): Promise<Compra> {
    return this.compraRepository.findById(id, filter);
  }

  @patch('/compras/{id}', {
    responses: {
      '204': {
        description: 'Compra PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compra, {partial: true}),
        },
      },
    })
    compra: Compra,
  ): Promise<void> {
    await this.compraRepository.updateById(id, compra);
  }

  @put('/compras/{id}', {
    responses: {
      '204': {
        description: 'Compra PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() compra: Compra,
  ): Promise<void> {
    await this.compraRepository.replaceById(id, compra);
  }

  @del('/compras/{id}', {
    responses: {
      '204': {
        description: 'Compra DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.compraRepository.deleteById(id);
  }
}
