import {Entity, model, property} from '@loopback/repository';

@model()
export class Viewinventario extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  idhotel: number;

  @property({
    type: 'number',
    required: true,
  })
  iddetalle: number;

  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idinventario: number;

  @property({
    type: 'string',
    required: true,
  })
  nombrehotel: string;

  @property({
    type: 'string',
    required: true,
  })
  nombrearticulo: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcionarticulo: string;


  constructor(data?: Partial<Viewinventario>) {
    super(data);
  }
}

export interface ViewinventarioRelations {
  // describe navigational properties here
}

export type ViewinventarioWithRelations = Viewinventario & ViewinventarioRelations;
