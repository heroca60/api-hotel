import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'servicio'
    }
  }
})
export class Servicio extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idservicio?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreservicio: string;

  @property({
    type: 'number',
    required: true,
  })
  costoextraservicio: number;

  constructor(data?: Partial<Servicio>) {
    super(data);
  }
}

export interface ServicioRelations {
  // describe navigational properties here
}

export type ServicioWithRelations = Servicio & ServicioRelations;
