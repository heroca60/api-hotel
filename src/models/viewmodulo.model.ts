import {Entity, model, property} from '@loopback/repository';

@model()
export class Viewmodulo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idmodulo: number;

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
  nombremodulo: string;


  constructor(data?: Partial<Viewmodulo>) {
    super(data);
  }
}

export interface ViewmoduloRelations {
  // describe navigational properties here
}

export type ViewmoduloWithRelations = Viewmodulo & ViewmoduloRelations;
