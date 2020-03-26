import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'modulo'
    }
  }
})
export class Modulo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idmodulo?: number;

  @property({
    type: 'number',
    required: true,
  })
  idhotel: number;

  @property({
    type: 'string',
    required: true,
  })
  nombremodulo: string;


  constructor(data?: Partial<Modulo>) {
    super(data);
  }
}

export interface ModuloRelations {
  // describe navigational properties here
}

export type ModuloWithRelations = Modulo & ModuloRelations;
