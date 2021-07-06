const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)


test('blog length', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(1)
})

afterAll(() => {
  mongoose.connection.close()
}, 10000)