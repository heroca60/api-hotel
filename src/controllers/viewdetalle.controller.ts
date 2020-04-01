import { ViewdetalleRepository } from "../repositories";
import { repository } from "@loopback/repository";
import { get, getModelSchemaRef, param } from "@loopback/rest";
import { Viewdetalle } from "../models";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class ViewdetalleController {
  constructor(
    @repository(ViewdetalleRepository)
    public viewdetalleRepository: ViewdetalleRepository,
  ) { }


  /********************************/
  @get('/viewdetalles/{idcompra}', {
    responses: {
      '200': {
        description: 'Array of detalles de compra model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Viewdetalle, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async test(
    @param.path.number('idcompra') idcompra: number
  ): Promise<Viewdetalle[]> {
    return this.viewdetalleRepository.dataSource.execute('Select * from viewdetalle where idcompra=' + idcompra);
  }



  /********************************/
  @get('/viewdetallebystatus/{idcompra}', {
    responses: {
      '200': {
        description: 'Array of detalles de compra model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Viewdetalle, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async buscar(
    @param.path.number('idcompra') idcompra: number
  ): Promise<Viewdetalle[]> {
    return this.viewdetalleRepository.dataSource.execute('Select * from viewdetalle where inventariadodetalle = 0 and idcompra=' + idcompra);
  }
  /********************************/

}
