'use strict';

const { app } = require('../server');
const { db,Users } = require('./models/index');
const supertest = require('supertest');
const bcrypt = require('bcrypt');
const base64 = require('base-64')
const basic = require('./middleware/basic')
const mockServerMethods = supertest(app);
let userInfo = {
    username: "mohammad",
    password: "123"
}

const req = {};
const res = {
    status: jest.fn(() => res),
    send: jest.fn(() => res)
  }
  const next = jest.fn();

beforeAll(async () => {
    await db.sync();
    await Users.create(userInfo);
});

describe('testing my server', () => {
    it('return hi in home route', async () => {
        let basicAuth = await base64.encode(`${userInfo.username}:${userInfo.password}`);
        req.headers = {
            authorization: `Basic ${basicAuth}`,
          };
    
          return basic(req, res, next)
            .then(() => {
              expect(next).toHaveBeenCalledWith();
            });
        
    });
    
    
});

afterAll(async () => {
    await db.drop();
});










// 'use strict';
// const { app } = require('../src/server');
// const { db } = require('../src/models/index');
// const supertest = require('supertest');
// const mockServerMethods = supertest(app);

// beforeAll(async () => {
//     await db.sync();
// });

// describe('testing my server', () => {
//     it('return hi in home route', async () => {
//         const response = await mockServerMethods.get('/');
//         expect(response.status).toBe(200);
//     });
//     it('return 404 in an invalid routes', async () => {
//         const response = await mockServerMethods.get('/no');
//         expect(response.status).toBe(404);
//     });


//     it('can add a food', async () => {
//         const response = await mockServerMethods.post('/food').send({
//             Name: 'Mansaf'
//         });
//         expect(response.status).toBe(201);
//     });
//     it('can read all foods', async () => {
//         const response = await mockServerMethods.get('/food');
//         expect(response.status).toBe(200);
//     });
//     it('can update food', async () => {
//         const response = await mockServerMethods.put('/food/1');
//         expect(response.status).toBe(201);
//     });
//     it('can delete food', async () => {
//         const response = await mockServerMethods.delete('/food/1');
//         expect(response.status).toBe(204);
//     });


//     it('can add a clothes', async () => {
//         const response = await mockServerMethods.post('/clothes').send({
//             Name: 'hat'
//         });
//         expect(response.status).toBe(201);
//     });
//     it('can read all clothes', async () => {
//         const response = await mockServerMethods.get('/clothes');
//         expect(response.status).toBe(200);
//     });
//     it('can update clothes', async () => {
//         const response = await mockServerMethods.put('/clothes/1');
//         expect(response.status).toBe(201);
//     });
//     it('can delete clothes', async () => {
//         const response = await mockServerMethods.delete('/clothes/1');
//         expect(response.status).toBe(204);
//     });


//     it('can add an author', async () => {
//         const response = await mockServerMethods.post('/author').send({
//             firstName: 'mohammad',
//             lastName: 'omar'
//         });
//         expect(response.status).toBe(201);
//     });
//     it('can read all authors', async () => {
//         const response = await mockServerMethods.get('/author');
//         expect(response.status).toBe(200);
//     });
//     it('can update author', async () => {
//         const response = await mockServerMethods.put('/author/1');
//         expect(response.status).toBe(201);
//     });
//     it('can delete author', async () => {
//         const response = await mockServerMethods.delete('/author/1');
//         expect(response.status).toBe(204);
//     });
//     it('can read all author Books', async () => {
//         const response = await mockServerMethods.get('/authorBooks/1');
//         expect(response.status).toBe(200);
//     });


//     it('can add a book', async () => {
//         const response = await mockServerMethods.post('/book').send({
//             bookName: 'book1',
//             authorId: 1
//         });
//         expect(response.status).toBe(201);
//     });
//     it('can read all books', async () => {
//         const response = await mockServerMethods.get('/book');
//         expect(response.status).toBe(200);
//     });
//     it('can update book', async () => {
//         const response = await mockServerMethods.put('/book/1');
//         expect(response.status).toBe(201);
//     });
//     it('can delete book', async () => {
//         const response = await mockServerMethods.delete('/book/1');
//         expect(response.status).toBe(204);
//     });
// });

// afterAll(async () => {
//     await db.drop();
// });