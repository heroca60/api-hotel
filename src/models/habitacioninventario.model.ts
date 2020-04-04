import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'habitacioninventario'
    }
  }
})

export class Habitacioninventario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idhabitacioninventario?: number;

  @property({
    type: 'number',
    required: true,
  })
  idhabitacion?: number;

  @property({
    type: 'number',
    required: true,
  })
  idinventario?: number;

  constructor(data?: Partial<Habitacioninventario>) {
    super(data);
  }
}

export interface HabitacioninventarioRelations {
  // describe navigational properties here
}

export type HabitacioninventarioWithRelations = Habitacioninventario & HabitacioninventarioRelations;
