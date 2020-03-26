import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'habitacion'
    }
  }
})

export class Habitacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idhabitacion?: number;

  @property({
    type: 'number',
    required: true,
  })
  idmodulo: number;
  
  @property({
    type: 'number',
    required: true,
  })
  idtipo: number;


  @property({
    type: 'number',
    required: true,
  })
  preciohabitacion: number;
  
  @property({
    type: 'number',
    required: true,
  })
  estadohabitacion: number;


  constructor(data?: Partial<Habitacion>) {
    super(data);
  }
}

export interface HabitacionRelations {
  // describe navigational properties here
}

export type HabitacionWithRelations = Habitacion & HabitacionRelations;
