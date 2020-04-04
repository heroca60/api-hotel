import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where
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
import { Habitacionservicio } from '../models';
import { HabitacionservicioRepository } from '../repositories';

export class HabitacionservicioController {
  constructor(
    @repository(HabitacionservicioRepository)
    public habitacionservicioRepository: HabitacionservicioRepository,
  ) { }

  @post('/habitacionservicios', {
    responses: {
      '200': {
        description: 'Habitacionservicio model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Habitacionservicio) } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habitacionservicio, {
            title: 'NewHabitacionservicio',
            exclude: ['idhabitacionservicio'],
          }),
        },
      },
    })
    habitacionservicio: Omit<Habitacionservicio, 'idhabitacionservicio'>,
  ): Promise<Habitacionservicio> {
    return this.habitacionservicioRepository.create(habitacionservicio);
  }

  @get('/habitacionservicios/count', {
    responses: {
      '200': {
        description: 'Habitacionservicio model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Habitacionservicio)) where?: Where<Habitacionservicio>,
  ): Promise<Count> {
    return this.habitacionservicioRepository.count(where);
  }

  @get('/habitacionservicios', {
    responses: {
      '200': {
        description: 'Array of Habitacionservicio model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Habitacionservicio, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Habitacionservicio)) filter?: Filter<Habitacionservicio>,
  ): Promise<Habitacionservicio[]> {
    return this.habitacionservicioRepository.find(filter);
  }


  @patch('/habitacionservicios', {
    responses: {
      '200': {
        description: 'Habitacionservicio PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habitacionservicio, { partial: true }),
        },
      },
    })
    habitacionservicio: Habitacionservicio,
    @param.query.object('where', getWhereSchemaFor(Habitacionservicio)) where?: Where<Habitacionservicio>,
  ): Promise<Count> {
    return this.habitacionservicioRepository.updateAll(habitacionservicio, where);
  }

  @get('/habitacionservicios/{id}', {
    responses: {
      '200': {
        description: 'Habitacionservicio model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Habitacionservicio, { includeRelations: true }),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Habitacionservicio)) filter?: Filter<Habitacionservicio>
  ): Promise<Habitacionservicio> {
    return this.habitacionservicioRepository.findById(id, filter);
  }

  @patch('/habitacionservicios/{id}', {
    responses: {
      '204': {
        description: 'Habitacionservicio PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habitacionservicio, { partial: true }),
        },
      },
    })
    habitacionservicio: Habitacionservicio,
  ): Promise<void> {
    await this.habitacionservicioRepository.updateById(id, habitacionservicio);
  }

  @put('/habitacionservicios/{id}', {
    responses: {
      '204': {
        description: 'Habitacionservicio PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() habitacionservicio: Habitacionservicio,
  ): Promise<void> {
    await this.habitacionservicioRepository.replaceById(id, habitacionservicio);
  }

  @del('/habitacionservicios/{id}', {
    responses: {
      '204': {
        description: 'Habitacionservicio DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.habitacionservicioRepository.deleteById(id);
  }
}
