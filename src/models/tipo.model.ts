import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'tipo'
    }
  }
})
export class Tipo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idtipo?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombretipo: string;


  constructor(data?: Partial<Tipo>) {
    super(data);
  }
}

export interface TipoRelations {
  // describe navigational properties here
}

export type TipoWithRelations = Tipo & TipoRelations;
