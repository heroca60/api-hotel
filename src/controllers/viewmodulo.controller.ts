import { ViewmoduloRepository } from "../repositories";
import { repository } from "@loopback/repository";
import { get, getModelSchemaRef, param } from "@loopback/rest";
import { Viewmodulo } from "../models";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class ViewmoduloController {
  constructor(
    @repository(ViewmoduloRepository)
    public viewmoduloRepository: ViewmoduloRepository,
  ) { }

  /********************************/
  @get('/viewmodulos/{idhotel}', {
    responses: {
      '200': {
        description: 'Array of modulos model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Viewmodulo, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async test(
    @param.path.number('idhotel') idhotel: number
  ): Promise<Viewmodulo[]> {
    return this.viewmoduloRepository.dataSource.execute('select * from viewmodulo where idhotel=' + idhotel);
  }
  /********************************/
}
