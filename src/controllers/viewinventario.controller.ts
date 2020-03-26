import { ViewinventarioRepository } from '../repositories';
import { repository } from '@loopback/repository';
import { get, getModelSchemaRef, param } from '@loopback/rest';
import { Viewinventario } from '../models';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class ViewinventarioController {
  constructor(
    @repository(ViewinventarioRepository)
    public viewinventarioRepository: ViewinventarioRepository,
  ) { }

  /********************************/
  @get('/viewinventarios/{idhotel}', {
    responses: {
      '200': {
        description: 'Array of modulos model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Viewinventario, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async test(
    @param.path.number('idhotel') idhotel: number
  ): Promise<Viewinventario[]> {
    return this.viewinventarioRepository.dataSource.execute('select * from viewinventario where idhotel=' + idhotel);
  }
  /********************************/
}
