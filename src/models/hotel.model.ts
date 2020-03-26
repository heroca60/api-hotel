import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'hotel'
    }
  }
})
export class Hotel extends Entity {

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idhotel?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombrehotel: string;

  @property({
    type: 'string',
    required: true,
  })
  direccionhotel: string;

  @property({
    type: 'string',
    required: true,
  })
  representantehotel: string;

  @property({
    type: 'number',
    required: true,
    default: 1,
  })
  estadohotel: number;


  constructor(data?: Partial<Hotel>) {
    super(data);
  }
}

export interface HotelRelations {
  // describe navigational properties here
}

export type HotelWithRelations = Hotel & HotelRelations;
