import { repository } from "@loopback/repository";
import { ViewhabitacionRepository } from "../repositories";
import { get, getModelSchemaRef, param } from "@loopback/rest";
import { Viewhabitacion } from "../models";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class ViewhabitacionController {
  constructor(
    @repository(ViewhabitacionRepository)
    public viewhabitacionRepository: ViewhabitacionRepository,
  ) {}

    /********************************/
    @get('/viewhabitaciones/{idhotel}', {
      responses: {
        '200': {
          description: 'Array of view habitaciones model instances',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: getModelSchemaRef(Viewhabitacion, { includeRelations: true }),
              },
            },
          },
        },
      },
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async test(
      @param.path.number('idhotel') idhotel: number
    ): Promise<Viewhabitacion[]> {
      return this.viewhabitacionRepository.dataSource.execute('select * from viewhabitacion where idhotel=' + idhotel);
    }
    /********************************/
}
