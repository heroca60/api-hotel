import { Entity, model, property } from '@loopback/repository';

@model()
export class Viewhabitacionservicio extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idhabitacionservicio: number;

  @property({
    type: 'number',    
    required: true,
  })
  idhotel: number;

  @property({
    type: 'string',
    required: true,
  })
  nombrehotel: string;

  @property({
    type: 'string',
    required: true,
  })
  nombretipo: string;


  constructor(data?: Partial<Viewhabitacionservicio>) {
    super(data);
  }
}

export interface ViewhabitacionservicioRelations {
  // describe navigational properties here
}

export type ViewhabitacionservicioWithRelations = Viewhabitacionservicio & ViewhabitacionservicioRelations;
