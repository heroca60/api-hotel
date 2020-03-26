import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'articulo'
    }
  }
})

export class Articulo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idarticulo?: number;

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


  constructor(data?: Partial<Articulo>) {
    super(data);
  }
}

export interface ArticuloRelations {
  // describe navigational properties here
}

export type ArticuloWithRelations = Articulo & ArticuloRelations;
