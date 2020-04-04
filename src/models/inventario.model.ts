import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'inventario'
    }
  }
})
export class Inventario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idinventario?: number;

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
    required: true,
  })
  estadoinventario: number;

  @property({
    type: 'number',
    required: true,
  })
  asignadoinventario: number;


  constructor(data?: Partial<Inventario>) {
    super(data);
  }
}

export interface InventarioRelations {
  // describe navigational properties here
}

export type InventarioWithRelations = Inventario & InventarioRelations;
