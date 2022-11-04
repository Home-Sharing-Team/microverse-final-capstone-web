import { createServer } from 'miragejs';

export const initFakeServer = () => {
  createServer({
    routes() {
      this.namespace = 'api/v1';

      this.get('/example', () => [
        {
          id: 1,
          title: 'Example',
        },
        {
          id: 2,
          title: 'Example 2',
        },
      ]);
    },
  });
};
