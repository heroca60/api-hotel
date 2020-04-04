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
import { Habitacion, Objetohabitacion, Servicio, Inventario } from '../models';
import {
  HabitacionRepository,
  HabitacionservicioRepository,
  HabitacioninventarioRepository,
  InventarioRepository
} from '../repositories';

export class HabitacionController {
  constructor(
    @repository(HabitacionRepository)
    public habitacionRepository: HabitacionRepository,
    @repository(HabitacionservicioRepository)
    public habitacionservicioRepository: HabitacionservicioRepository,
    @repository(HabitacioninventarioRepository)
    public habitacioninventarioRepository: HabitacioninventarioRepository,
    @repository(InventarioRepository)
    public inventarioRepository: InventarioRepository
  ) { }

  @post('/habitaciones', {
    responses: {
      '200': {
        description: 'Habitacion model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Objetohabitacion) } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Objetohabitacion, {
            title: 'NewHabitacion',
            exclude: ['idhabitacion'],
          }),
        },
      },
    })
    objetohabitacion: Omit<Objetohabitacion, 'idhabitacion'>,
  ): Promise<boolean> {
    let res = false;
    let i: number;
    const servicios: Servicio[] = objetohabitacion.servicios;
    const inventarios: Inventario[] = objetohabitacion.inventarios;

    const tx = await this.habitacionRepository.beginTransaction({
      isolationLevel: IsolationLevel.READ_COMMITTED,
      timeout: 30000
    });
    try {
      const tran = await this.habitacionRepository.create(
        {
          idmodulo: objetohabitacion.idmodulo,
          idtipo: objetohabitacion.idtipo,
          preciohabitacion: objetohabitacion.preciohabitacion,
          estadohabitacion: objetohabitacion.estadohabitacion
        },
        { transaction: tx });
      //Asignando todos los servicios a la habitación
      for (i = 0; i < servicios.length; i++) {
        await this.habitacionservicioRepository.create(
          {
            idhabitacion: tran.idhabitacion,
            idservicio: servicios[i].idservicio
          },
          {
            transaction: tx
          }
        )
      }
      //Asignando todos los inventarios a la habitación
      for (i = 0; i < inventarios.length; i++) {
        await this.habitacioninventarioRepository.create(
          {
            idhabitacion: tran.idhabitacion,
            idinventario: inventarios[i].idinventario
          },
          {
            transaction: tx
          }
        );
        //Actualizando el inventario, inventario asignado
        //cambia su atributo 'asignadoinventario' de 0 a 1
        await this.inventarioRepository.updateById(
          inventarios[i].idinventario,
          {
            asignadoinventario: inventarios[i].asignadoinventario
          },
          {
            transaction: tx
          }
        );
      }
      await tx.commit();
      res = true;
    } catch (error) {
      await tx.rollback();
      res = false;
    }
    return res;
  }

  @get('/habitaciones/count', {
    responses: {
      '200': {
        description: 'Habitacion model count',
        content: { 'application/json': { schema: CountSchema } },
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
              items: getModelSchemaRef(
                Habitacion,
                {
                  includeRelations: true,
                }),
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
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Habitacion, { partial: true }),
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
            schema: getModelSchemaRef(Habitacion, { includeRelations: true }),
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
          schema: getModelSchemaRef(Habitacion, { partial: true }),
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
