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
import {Habitacion} from '../models';
import {HabitacionRepository} from '../repositories';

export class HabitacionController {
  constructor(
    @repository(HabitacionRepository)
    public habitacionRepository : HabitacionRepository,
  ) {}

  @post('/habitaciones', {
    responses: {
      '200': {
        description: 'Habitacion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Habitacion)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habitacion, {
            title: 'NewHabitacion',
            exclude: ['idhabitacion'],
          }),
        },
      },
    })
    habitacion: Omit<Habitacion, 'idhabitacion'>,
  ): Promise<Habitacion> {
    return this.habitacionRepository.create(habitacion);
  }

  @get('/habitaciones/count', {
    responses: {
      '200': {
        description: 'Habitacion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Habitacion)) where?: Where<Habitacion>,
  ): Promise<Count> {
    return this.habitacionRepository.count(where);
  }

  @get('/habitaciones', {
    responses: {
      '200': {
        description: 'Array of Habitacion model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Habitacion, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Habitacion)) filter?: Filter<Habitacion>,
  ): Promise<Habitacion[]> {
    return this.habitacionRepository.find(filter);
  }

  @patch('/habitaciones', {
    responses: {
      '200': {
        description: 'Habitacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habitacion, {partial: true}),
        },
      },
    })
    habitacion: Habitacion,
    @param.query.object('where', getWhereSchemaFor(Habitacion)) where?: Where<Habitacion>,
  ): Promise<Count> {
    return this.habitacionRepository.updateAll(habitacion, where);
  }

  @get('/habitaciones/{id}', {
    responses: {
      '200': {
        description: 'Habitacion model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Habitacion, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Habitacion)) filter?: Filter<Habitacion>
  ): Promise<Habitacion> {
    return this.habitacionRepository.findById(id, filter);
  }

  @patch('/habitaciones/{id}', {
    responses: {
      '204': {
        description: 'Habitacion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habitacion, {partial: true}),
        },
      },
    })
    habitacion: Habitacion,
  ): Promise<void> {
    await this.habitacionRepository.updateById(id, habitacion);
  }

  @put('/habitaciones/{id}', {
    responses: {
      '204': {
        description: 'Habitacion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() habitacion: Habitacion,
  ): Promise<void> {
    await this.habitacionRepository.replaceById(id, habitacion);
  }

  @del('/habitaciones/{id}', {
    responses: {
      '204': {
        description: 'Habitacion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.habitacionRepository.deleteById(id);
  }
}
