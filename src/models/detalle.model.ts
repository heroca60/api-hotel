import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'detalle'
    }
  }
})
export class Detalle extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  iddetalle?: number;

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
    type: 'number',
    required: true,
  })
  cantidaddetalle: number;

  @property({
    type: 'number',
    required: true,
  })
  preciodetalle: number;

  @property({
    type: 'number',
    required: true,
  })
  inventariadodetalle: number;


  constructor(data?: Partial<Detalle>) {
    super(data);
  }
}

export interface DetalleRelations {
  // describe navigational properties here
}

export type DetalleWithRelations = Detalle & DetalleRelations;
