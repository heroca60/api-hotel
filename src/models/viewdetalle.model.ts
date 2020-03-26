import {Entity, model, property} from '@loopback/repository';

@model()
export class Viewdetalle extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  iddetalle: number;

  @property({
    type: 'number',
    required: true,
  })
  idcompra: number;

  @property({
    type: 'number',
    required: true,
  })
  idarticulo: number;

  @property({
    type: 'string',
    required: true,
  })
  nombrearticulo: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidaddetalle: number;

  @property({
    type: 'number',
    required: true,
  })
  preciodetalle: number;


  constructor(data?: Partial<Viewdetalle>) {
    super(data);
  }
}

export interface ViewdetalleRelations {
  // describe navigational properties here
}

export type ViewdetalleWithRelations = Viewdetalle & ViewdetalleRelations;
