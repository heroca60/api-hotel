import { Model, model, property } from '@loopback/repository';
import { Servicio, Inventario } from '../models'

@model()
export class Objetohabitacion extends Model {
  @property({
    type: 'number',
    required: true,
    id: true
  })
  idhabitacion?: number;

  @property({
    type: 'number',
    required: true,
  })
  idmodulo: number;

  @property({
    type: 'number',
    required: true,
  })
  idtipo: number;

  @property({
    type: 'number',
    required: true,
  })
  preciohabitacion: number;

  @property({
    type: 'number',
    required: true,
  })
  estadohabitacion: number;

  @property.array(Servicio)
  servicios: Servicio[];

  @property.array(Inventario)
  inventarios: Inventario[];

  constructor(data?: Partial<Objetohabitacion>) {
    super(data);
  }
}

export interface ObjetohabitacionRelations {
  // describe navigational properties here
}

export type ObjetohabitacionWithRelations = Objetohabitacion & ObjetohabitacionRelations;
