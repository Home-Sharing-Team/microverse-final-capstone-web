import { createServer } from 'miragejs';
import { v4 as uuidV4 } from 'uuid';
import { fakeCategories } from '../data/category.fake.data';
import { fakePropertyItems, fakeUserProperties } from '../data/property.fake.data';
import { fakeReservationItems } from '../data/reservations.fake.data';

const fakeUser = {
  id: uuidV4(),
  name: 'Mr Test',
  email: 'test@test.com',
  password: '123123',
  avatar: null,
  role: 'user',
  createdAt: new Date(),
};
const fakeAccessToken = 'pCczRbQCk9uRLNfpJttdv';

export const initFakeServer = () => {
  createServer({
    routes() {
      this.namespace = 'api/v1';

      this.get('/categories', () => ({
        success: true,
        data: Object.values(fakeCategories),
      }));

      this.get('/properties/:id', (schema, request) => ({
        success: true,
        data: fakePropertyItems.find((property) => property.id === request.params.id),
      }));

      this.get('/properties', (schema, request) => {
        if (Object.keys(request.queryParams).length > 0) {
          const categoryId = request.queryParams.category;
          const propertiesByCategory = fakePropertyItems.filter(
            ({ categories }) => categories.some((category) => category.id === categoryId),
          );

          return {
            success: true,
            data: propertiesByCategory,
          };
        }

        return {
          success: true,
          data: fakePropertyItems,
        };
      });

      this.get('/users/:userId/reservations', () => ({
        success: true,
        data: fakeReservationItems,
      }));

      this.get('/users/:userId/properties', () => ({
        success: true,
        data: fakeUserProperties,
      }));

      this.delete('reservations/:id', () => ({
        success: true,
        data: 'Reservation was successfully deleted',
      }));

      this.get('/auth/me', (schema, request) => {
        try {
          const { authorization } = request.requestHeaders;

          if (!authorization) {
            throw new Error('Not authorized to access this route');
          }

          const [, accessToken] = authorization.split(' ');

          if (accessToken !== fakeAccessToken) {
            throw new Error('Invalid access token!');
          }

          return {
            success: true,
            data: fakeUser,
          };
        } catch (error) {
          return {
            success: false,
            error: error.message,
          };
        }
      });

      this.post('/auth/sign_in', (schema, request) => {
        try {
          const { email, password } = JSON.parse(request.requestBody);

          if (fakeUser.email !== email || fakeUser.password !== password) {
            throw new Error('Invalid credentials!');
          }

          return {
            success: true,
            data: {
              user: fakeUser,
              accessToken: fakeAccessToken,
            },
          };
        } catch (error) {
          return {
            success: false,
            error: error.message,
          };
        }
      });
    },
  });
};
