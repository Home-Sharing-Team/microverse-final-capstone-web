import { createServer } from 'miragejs';
import { fakePropertyItems } from '../data/property.fake.data';

export const initFakeServer = () => {
  createServer({
    routes() {
      this.namespace = 'api/v1';

      this.get('/properties', () => fakePropertyItems);
    },
  });
};
