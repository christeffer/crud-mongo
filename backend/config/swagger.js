module.exports = {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'CRUD',
    description: 'CRUD de cidades e estados usando NodeJS e MongoDB',
    termsOfService: 'http://api_url/terms/',
    contact: {
      name: 'Christeffer',
      email: 'christeffer@hotmail.com',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  servers: [
    {
      url: 'http://localhost:3333/',
      description: 'Local server',
    },
  ],
  security: [
    {
      ApiKeyAuth: [],
    },
  ],
  tags: [
    {
      name: 'CRUD Estados e Cidades',
    },
  ],
  paths: {
    '/state': {
      get: {
        tags: ['Estado'],
        description: 'Listar Estados',
        parameters: [],
        responses: {
          200: {
            description: 'Lista de estados Cadastrados',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/StateResponse',
                },
              },
            },
          },
          400: {
            description: 'Consulta inválida',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Erro ao consultar os estados',
                  success: false,
                },
              },
            },
          },
        },
      },
      post: {
        tags: ['Estado'],
        description: 'Cadastro de Estado',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/State',
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: 'Novo Estado cadastrado',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/StateResponse',
                },
              },
            },
          },
          400: {
            description: 'Parâmetros inválidos',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Já existe um estado com esse nome',
                  success: false,
                },
              },
            },
          },
        },
      },
    },
    '/state/{id}': {
      put: {
        tags: ['Estado'],
        description: 'Atualização de Estado',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              $ref: '#/components/schemas/stateId',
            },
            required: true,
            description: 'Necessário informar o id do estado a ser atualizado',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/State',
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: 'Estado Atualizado com sucesso',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/StateResponse',
                },
              },
            },
          },
          400: {
            description: 'Parâmetros inválidos',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Estado não encontrado',
                  success: false,
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ['Estado'],
        description: 'Apagar um Estado',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              $ref: '#/components/schemas/stateId',
            },
            required: true,
            description: 'Necessário informar o id do estado a ser atualizado',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/State',
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: 'Estado Removido com sucesso',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Estado removido',
                  success: true,
                },
              },
            },
          },
          400: {
            description: 'Parâmetros inválidos',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Estado não encontrado',
                  success: false,
                },
              },
            },
          },
        },
      },
    },
    '/city': {
      get: {
        tags: ['Cidade'],
        description: 'Listar Cidades',
        parameters: [],
        responses: {
          200: {
            description: 'Lista de cidades Cadastradas',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/CityResponse',
                },
              },
            },
          },
          400: {
            description: 'Consulta inválida',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Erro ao consultar as cidades',
                  success: false,
                },
              },
            },
          },
        },
      },
      post: {
        tags: ['Cidade'],
        description: 'Cadastro de Cidade',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/City',
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: 'Nova Cidade cadastrado',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/CityResponse',
                },
              },
            },
          },
          400: {
            description: 'Parâmetros inválidos',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Já existe uma cidade com esse nome',
                  success: false,
                },
              },
            },
          },
        },
      },
    },
    '/city/{id}': {
      put: {
        tags: ['Cidade'],
        description: 'Atualização de Cidade',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              $ref: '#/components/schemas/cityId',
            },
            required: true,
            description: 'Necessário informar o id da cidade a ser atualizada',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/City',
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: 'Cidade Atualizada com sucesso',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/CityResponse',
                },
              },
            },
          },
          400: {
            description: 'Parâmetros inválidos',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Cidade não encontrada',
                  success: false,
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ['Cidade'],
        description: 'Apagar uma Cidade',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              $ref: '#/components/schemas/cityId',
            },
            required: true,
            description: 'Necessário informar o id da cidade a ser atualizada',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/City',
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: 'Cidade Removida com sucesso',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Cidade removida',
                  success: true,
                },
              },
            },
          },
          400: {
            description: 'Parâmetros inválidos',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
                example: {
                  message: 'Cidade não encontrada',
                  success: false,
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      stateId: {
        type: 'string',
        description: 'ID do estado',
        example: '5fa70d603ee8351788b91465',
      },
      stateName: {
        type: 'string',
        description: 'Nome do estado',
        example: 'São Paulo',
      },
      abbreviation: {
        type: 'string',
        description: 'Abreviação do Estado',
        example: 'SP',
      },
      cityId: {
        type: 'string',
        description: 'ID do cidade',
        example: '5fa70d603ee8351788b91465',
      },
      cityName: {
        type: 'string',
        description: 'Nome da Cidade',
        example: 'Campinas',
      },
      createdAt: {
        type: 'string',
        description: 'Data de criação',
        example: '2020-11-07T21:10:56.412Z',
      },
      updatedAt: {
        type: 'string',
        description: 'Data da última atualização',
        example: '2020-11-07T21:10:56.412Z',
      },
      State: {
        type: 'object',
        properties: {
          name: {
            $ref: '#/components/schemas/stateName',
          },
          abbreviation: {
            $ref: '#/components/schemas/abbreviation',
          },
        },
      },
      StateResponse: {
        type: 'object',
        properties: {
          _id: {
            $ref: '#/components/schemas/stateId',
          },
          name: {
            $ref: '#/components/schemas/stateName',
          },
          abbreviation: {
            $ref: '#/components/schemas/abbreviation',
          },
          createdAt: {
            $ref: '#/components/schemas/createdAt',
          },
          updatedAt: {
            $ref: '#/components/schemas/updatedAt',
          },
        },
      },
      City: {
        type: 'object',
        properties: {
          name: {
            $ref: '#/components/schemas/cityName',
          },
          state: {
            $ref: '#/components/schemas/stateId',
          },
        },
      },
      CityResponse: {
        type: 'object',
        properties: {
          _id: {
            $ref: '#/components/schemas/cityId',
          },
          name: {
            $ref: '#/components/schemas/cityName',
          },
          state: {
            $ref: '#/components/schemas/StateResponse',
          },
          createdAt: {
            $ref: '#/components/schemas/createdAt',
          },
          updatedAt: {
            $ref: '#/components/schemas/updatedAt',
          },
        },
      },
      User: {
        type: 'object',
        properties: {
          identificationNumber: {
            $ref: '#/components/schemas/identificationNumber',
          },
          username: {
            $ref: '#/components/schemas/username',
          },
          userType: {
            $ref: '#/components/schemas/userType',
          },
          companyId: {
            $ref: '#/components/schemas/companyId',
          },
        },
      },
      States: {
        type: 'object',
        properties: {
          states: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/StateResponse',
            },
          },
        },
      },
      Users: {
        type: 'object',
        properties: {
          users: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/User',
            },
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
          success: {
            type: 'boolean',
          },
        },
      },
    },
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'x-api-key',
      },
    },
  },
};
