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
import {Officer} from '../models';
import {OfficerRepository} from '../repositories';

export class OfficerController {
  constructor(
    @repository(OfficerRepository)
    public officerRepository : OfficerRepository,
  ) {}

  @post('/officers')
  @response(200, {
    description: 'Officer model instance',
    content: {'application/json': {schema: getModelSchemaRef(Officer)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Officer, {
            title: 'NewOfficer',
            exclude: ['id'],
          }),
        },
      },
    })
    officer: Omit<Officer, 'id'>,
  ): Promise<Officer> {
    return this.officerRepository.create(officer);
  }

  @get('/officers/count')
  @response(200, {
    description: 'Officer model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Officer) where?: Where<Officer>,
  ): Promise<Count> {
    return this.officerRepository.count(where);
  }

  @get('/officers')
  @response(200, {
    description: 'Array of Officer model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Officer, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Officer) filter?: Filter<Officer>,
  ): Promise<Officer[]> {
    return this.officerRepository.find(filter);
  }

  @patch('/officers')
  @response(200, {
    description: 'Officer PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Officer, {partial: true}),
        },
      },
    })
    officer: Officer,
    @param.where(Officer) where?: Where<Officer>,
  ): Promise<Count> {
    return this.officerRepository.updateAll(officer, where);
  }

  @get('/officers/{id}')
  @response(200, {
    description: 'Officer model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Officer, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Officer, {exclude: 'where'}) filter?: FilterExcludingWhere<Officer>
  ): Promise<Officer> {
    return this.officerRepository.findById(id, filter);
  }

  @patch('/officers/{id}')
  @response(204, {
    description: 'Officer PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Officer, {partial: true}),
        },
      },
    })
    officer: Officer,
  ): Promise<void> {
    await this.officerRepository.updateById(id, officer);
  }

  @put('/officers/{id}')
  @response(204, {
    description: 'Officer PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() officer: Officer,
  ): Promise<void> {
    await this.officerRepository.replaceById(id, officer);
  }

  @del('/officers/{id}')
  @response(204, {
    description: 'Officer DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.officerRepository.deleteById(id);
  }
}
