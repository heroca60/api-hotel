import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Habitacioninventario } from '../models';
import { HabitacioninventarioRepository } from '../repositories';

export class HabitacioninventarioController {
  constructor(
    @repository(HabitacioninventarioRepository)
    public habitacioninventarioRepository: HabitacioninventarioRepository,
  ) { }

  @post('/habitacioninventarios', {
    responses: {
      '200': {
        description: 'Habitacioninventario model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Habitacioninventario) } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habitacioninventario, {
            title: 'NewHabitacioninventario',
            exclude: ['idhabitacioninventario'],
          }),
        },
      },
    })
    habitacioninventario: Omit<Habitacioninventario, 'idhabitacioninventario'>,
  ): Promise<Habitacioninventario> {
    return this.habitacioninventarioRepository.create(habitacioninventario);
  }

  @get('/habitacioninventarios/count', {
    responses: {
      '200': {
        description: 'Habitacioninventario model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.where(Habitacioninventario) where?: Where<Habitacioninventario>,
  ): Promise<Count> {
    return this.habitacioninventarioRepository.count(where);
  }

  @get('/habitacioninventarios', {
    responses: {
      '200': {
        description: 'Array of Habitacioninventario model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Habitacioninventario, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Habitacioninventario) filter?: Filter<Habitacioninventario>,
  ): Promise<Habitacioninventario[]> {
    return this.habitacioninventarioRepository.find(filter);
  }

  @patch('/habitacioninventarios', {
    responses: {
      '200': {
        description: 'Habitacioninventario PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habitacioninventario, { partial: true }),
        },
      },
    })
    habitacioninventario: Habitacioninventario,
    @param.where(Habitacioninventario) where?: Where<Habitacioninventario>,
  ): Promise<Count> {
    return this.habitacioninventarioRepository.updateAll(habitacioninventario, where);
  }

  @get('/habitacioninventarios/{id}', {
    responses: {
      '200': {
        description: 'Habitacioninventario model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Habitacioninventario, { includeRelations: true }),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Habitacioninventario, { exclude: 'where' }) filter?: FilterExcludingWhere<Habitacioninventario>
  ): Promise<Habitacioninventario> {
    return this.habitacioninventarioRepository.findById(id, filter);
  }

  @patch('/habitacioninventarios/{id}', {
    responses: {
      '204': {
        description: 'Habitacioninventario PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habitacioninventario, { partial: true }),
        },
      },
    })
    habitacioninventario: Habitacioninventario,
  ): Promise<void> {
    await this.habitacioninventarioRepository.updateById(id, habitacioninventario);
  }

  @put('/habitacioninventarios/{id}', {
    responses: {
      '204': {
        description: 'Habitacioninventario PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() habitacioninventario: Habitacioninventario,
  ): Promise<void> {
    await this.habitacioninventarioRepository.replaceById(id, habitacioninventario);
  }

  @del('/habitacioninventarios/{id}', {
    responses: {
      '204': {
        description: 'Habitacioninventario DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.habitacioninventarioRepository.deleteById(id);
  }
}
