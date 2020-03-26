import { ViewhabitacionservicioRepository } from "../repositories";
import { repository } from "@loopback/repository";
import { get, getModelSchemaRef, param } from "@loopback/rest";
import { Viewhabitacionservicio } from "../models";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class ViewhabitacionservicioController {
  constructor(
    @repository(ViewhabitacionservicioRepository)
    public viewhabitacionservicioRepository: ViewhabitacionservicioRepository,
  ) { }


  /********************************/
  @get('/viewhabitacionservicios/{idhotel}', {
    responses: {
      '200': {
        description: 'Array of Habitacionservicio model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Viewhabitacionservicio, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async test(
    @param.path.number('idhotel') idhotel: number
  ): Promise<Viewhabitacionservicio[]> {
    return this.viewhabitacionservicioRepository.dataSource.execute('Select * from viewhabitacionservicio where idhotel=' + idhotel);
  }
  /********************************/
}
