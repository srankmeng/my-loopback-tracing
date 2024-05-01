import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import { serviceProxy } from '@loopback/service-proxy';
import {Coop} from '../models';
import {CoopRepository} from '../repositories';
import {UserDataSource} from '../datasources';
import {User} from '../services';

export class CoopController {
  constructor(
    @repository(CoopRepository)
    public coopRepository : CoopRepository,

    @serviceProxy(UserDataSource.dataSourceName)
    private userService: User
  ) {}

  @post('/coops')
  @response(200, {
    description: 'Coop model instance',
    content: {'application/json': {schema: getModelSchemaRef(Coop)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Coop, {
            title: 'NewCoop',
            exclude: ['id'],
          }),
        },
      },
    })
    coop: Omit<Coop, 'id'>,
  ): Promise<Coop> {
    return this.coopRepository.create(coop);
  }

  @get('/coops/count')
  @response(200, {
    description: 'Coop model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Coop) where?: Where<Coop>,
  ): Promise<Count> {
    return this.coopRepository.count(where);
  }

  @get('/coops')
  @response(200, {
    description: 'Array of Coop model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Coop, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Coop) filter?: Filter<Coop>,
  ): Promise<Coop[]> {
    return this.coopRepository.find(filter);
  }

  @get('/coops-with-officers')
  @response(200, {
    description: 'Array of Coop model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Coop, {includeRelations: true}),
        },
      },
    },
  })
  async findWithUser(
    @param.filter(Coop) filter?: Filter<Coop>,
  ): Promise<any> {
    const officers = await this.userService.getOfficer();
    const coops = await this.coopRepository.find(filter);
    return {
      coops,
      officers
    };
  }

  @patch('/coops')
  @response(200, {
    description: 'Coop PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Coop, {partial: true}),
        },
      },
    })
    coop: Coop,
    @param.where(Coop) where?: Where<Coop>,
  ): Promise<Count> {
    return this.coopRepository.updateAll(coop, where);
  }

  @get('/coops/{id}')
  @response(200, {
    description: 'Coop model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Coop, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Coop, {exclude: 'where'}) filter?: FilterExcludingWhere<Coop>
  ): Promise<Coop> {
    return this.coopRepository.findById(id, filter);
  }

  @patch('/coops/{id}')
  @response(204, {
    description: 'Coop PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Coop, {partial: true}),
        },
      },
    })
    coop: Coop,
  ): Promise<void> {
    await this.coopRepository.updateById(id, coop);
  }

  @put('/coops/{id}')
  @response(204, {
    description: 'Coop PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() coop: Coop,
  ): Promise<void> {
    await this.coopRepository.replaceById(id, coop);
  }

  @del('/coops/{id}')
  @response(204, {
    description: 'Coop DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.coopRepository.deleteById(id);
  }
}
