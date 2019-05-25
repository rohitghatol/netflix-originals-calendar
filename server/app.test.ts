import * as HttpStatus from 'http-status-codes';

import app from './app';

const request = require('supertest');

describe('The /api endpoint', () => {
  test('it should return an empty data object', async () => {
    const response = await request(app).get('/api');
    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body.data).toEqual([]);
  });
});
