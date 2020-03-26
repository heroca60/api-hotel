import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
  IsolationLevel,
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
import { Inventario, Detalle } from '../models';
import { InventarioRepository, DetalleRepository } from '../repositories';

export class InventarioController {

  constructor(
    @repository(InventarioRepository)
    public inventarioRepository: InventarioRepository,

    @repository(DetalleRepository)
    public detalleRepository: DetalleRepository,
  ) { }

  @post('/inventarios/{cantidad}', {
    responses: {
      '200': {
        description: 'Inventario model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Inventario) } },
      },
    },
  })
  async create(
    @param.path.number('cantidad') cantidad: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventario, {
            title: 'NewInventario',
            exclude: ['idinventario'],
          }),
        },
      },
    })
    inventario: Omit<Inventario, 'idinventario'>,
  ): Promise<boolean> {
    let res = false;
    const tx = this.inventarioRepository.beginTransaction(IsolationLevel.READ_COMMITTED);
    try {
      for (let i = 0; i <= cantidad; i++) {
        //Se crean todos los inventarios tomados de los detalles de compra
        await this.inventarioRepository.create(inventario, { transaction: tx })
        //Se actualiza el detalle, se pasa de inventariadodetalle = 0 a 1
        // 0 = no inventariado y 1 = inventariado
        await this.detalleRepository.updateById(inventario.iddetalle, { inventariadodetalle: 1 }, { transaction: tx })
      }
      await (await tx).commit();
      res = true;
    } catch (e) {
      await (await tx).rollback();
      res = false;
    }
    return res;
  }

  @get('/inventarios/count', {
    responses: {
      '200': {
        description: 'Inventario model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Inventario)) where?: Where<Inventario>,
  ): Promise<Count> {
    return this.inventarioRepository.count(where);
  }

  @get('/inventarios', {
    responses: {
      '200': {
        description: 'Array of Inventario model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Inventario, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Inventario)) filter?: Filter<Inventario>,
  ): Promise<Inventario[]> {
    return this.inventarioRepository.find(filter);
  }

  @patch('/inventarios', {
    responses: {
      '200': {
        description: 'Inventario PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventario, { partial: true }),
        },
      },
    })
    inventario: Inventario,
    @param.query.object('where', getWhereSchemaFor(Inventario)) where?: Where<Inventario>,
  ): Promise<Count> {
    return this.inventarioRepository.updateAll(inventario, where);
  }

  @get('/inventarios/{id}', {
    responses: {
      '200': {
        description: 'Inventario model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Inventario, { includeRelations: true }),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Inventario)) filter?: Filter<Inventario>
  ): Promise<Inventario> {
    return this.inventarioRepository.findById(id, filter);
  }

  @patch('/inventarios/{id}', {
    responses: {
      '204': {
        description: 'Inventario PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventario, { partial: true }),
        },
      },
    })
    inventario: Inventario,
  ): Promise<void> {
    await this.inventarioRepository.updateById(id, inventario);
  }

  @put('/inventarios/{id}', {
    responses: {
      '204': {
        description: 'Inventario PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() inventario: Inventario,
  ): Promise<void> {
    await this.inventarioRepository.replaceById(id, inventario);
  }

  @del('/inventarios/{id}', {
    responses: {
      '204': {
        description: 'Inventario DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.inventarioRepository.deleteById(id);
  }
}
