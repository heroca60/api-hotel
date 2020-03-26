import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'compra'
    }
  }
})

export class Compra extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idcompra?: number;

  @property({
    type: 'number',
    required: true,
  })
  idhotel: number;

  @property({
    type: 'string',
  })
  proveedorcompra?: string;

  @property({
    type: 'number',
    required: true,
    default: 0.00,
  })
  totalcompra: number;

  @property({
    type: 'string',
    required: true,
  })
  fechacompra: string;

  @property({
    type: 'string',
  })
  observacioncompra?: string;

  @property({
    type: 'string',
    required: true,
  })
  seriecompra: string;

  @property({
    type: 'number',
    required: true,
  })
  numerocompra: number;

  @property({
    type: 'number',
    required: true,
    default: 1,
  })
  estadocompra: number;


  constructor(data?: Partial<Compra>) {
    super(data);
  }
}

export interface CompraRelations {
  // describe navigational properties here
}

export type CompraWithRelations = Compra & CompraRelations;
