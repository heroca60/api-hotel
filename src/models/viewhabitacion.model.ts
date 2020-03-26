import {Entity, model, property} from '@loopback/repository';

@model()
export class Viewhabitacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idhabitacion: number;

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
    type: 'number',
    required: true,
  })
  idmodulo: number;

  @property({
    type: 'string',
    required: true,
  })
  nombremodulo: string;

  @property({
    type: 'number',
    required: true,
  })
  idtipo: number;

  @property({
    type: 'string',
    required: true,
  })
  nombretipo: string;

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


  constructor(data?: Partial<Viewhabitacion>) {
    super(data);
  }
}

export interface ViewhabitacionRelations {
  // describe navigational properties here
}

export type ViewhabitacionWithRelations = Viewhabitacion & ViewhabitacionRelations;
