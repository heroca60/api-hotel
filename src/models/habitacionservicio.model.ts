import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'habitacionservicio'
    }
  }
})

export class Habitacionservicio extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idhabitacionservicio?: number;

  @property({
    type: 'number',
    required: true,
  })
  idhabitacion?: number;

  @property({
    type: 'number',
    required: true,
  })
  idservicio?: number;

  constructor(data?: Partial<Habitacionservicio>) {
    super(data);
  }
}

export interface HabitacionservicioRelations {
  // describe navigational properties here
}

export type HabitacionservicioWithRelations = Habitacionservicio & HabitacionservicioRelations;
