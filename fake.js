export const data = {
  schemes: [],
  swagger: '2.0',
  info: {
    description: '',
    title: '',
    contact: {},
    version: '',
  },
  host: '',
  basePath: '',
  paths: {
    '/api/article': {
      get: {
        produces: ['application/json'],
        tags: ['文章'],
        summary: '获取文章',
        parameters: [
          {
            type: 'string',
            description: 'pageNo',
            name: 'pageNo',
            in: 'query',
            required: true,
          },
          {
            type: 'string',
            description: 'pageSize',
            name: 'pageSize',
            in: 'query',
            required: true,
          },
          {
            type: 'string',
            description: 'keywords',
            name: 'keywords',
            in: 'query',
          },
        ],
        responses: {
          200: {
            description: '{"code":200,"data":[],"message":"ok"}',
            schema: {
              type: 'string',
            },
          },
        },
      },
      put: {
        consumes: ['application/json'],
        tags: ['文章'],
        summary: '修改文章',
        parameters: [
          {
            description: 'title',
            name: 'Title',
            in: 'body',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
      post: {
        consumes: ['application/json'],
        tags: ['文章'],
        summary: '新建文章',
        parameters: [
          {
            description: 'title',
            name: 'Title',
            in: 'body',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
      delete: {
        produces: ['application/json'],
        tags: ['文章'],
        summary: '删除文章',
        parameters: [
          {
            type: 'string',
            description: 'id',
            name: 'id',
            in: 'query',
            required: true,
          },
        ],
        responses: {
          200: {
            description: '{"code":200,"data":[],"message":"ok"}',
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
  },
};
