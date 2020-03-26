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
import {Articulo} from '../models';
import {ArticuloRepository} from '../repositories';

export class ArticuloController {
  constructor(
    @repository(ArticuloRepository)
    public articuloRepository : ArticuloRepository,
  ) {}

  @post('/articulos', {
    responses: {
      '200': {
        description: 'Articulo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Articulo)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulo, {
            title: 'NewArticulo',
            exclude: ['idarticulo'],
          }),
        },
      },
    })
    articulo: Omit<Articulo, 'idarticulo'>,
  ): Promise<Articulo> {
    return this.articuloRepository.create(articulo);
  }

  @get('/articulos/count', {
    responses: {
      '200': {
        description: 'Articulo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Articulo)) where?: Where<Articulo>,
  ): Promise<Count> {
    return this.articuloRepository.count(where);
  }

  @get('/articulos', {
    responses: {
      '200': {
        description: 'Array of Articulo model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Articulo, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Articulo)) filter?: Filter<Articulo>,
  ): Promise<Articulo[]> {
    return this.articuloRepository.find(filter);
  }

  @patch('/articulos', {
    responses: {
      '200': {
        description: 'Articulo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulo, {partial: true}),
        },
      },
    })
    articulo: Articulo,
    @param.query.object('where', getWhereSchemaFor(Articulo)) where?: Where<Articulo>,
  ): Promise<Count> {
    return this.articuloRepository.updateAll(articulo, where);
  }

  @get('/articulos/{id}', {
    responses: {
      '200': {
        description: 'Articulo model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Articulo, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Articulo)) filter?: Filter<Articulo>
  ): Promise<Articulo> {
    return this.articuloRepository.findById(id, filter);
  }

  @patch('/articulos/{id}', {
    responses: {
      '204': {
        description: 'Articulo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulo, {partial: true}),
        },
      },
    })
    articulo: Articulo,
  ): Promise<void> {
    await this.articuloRepository.updateById(id, articulo);
  }

  @put('/articulos/{id}', {
    responses: {
      '204': {
        description: 'Articulo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() articulo: Articulo,
  ): Promise<void> {
    await this.articuloRepository.replaceById(id, articulo);
  }

  @del('/articulos/{id}', {
    responses: {
      '204': {
        description: 'Articulo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.articuloRepository.deleteById(id);
  }
}
