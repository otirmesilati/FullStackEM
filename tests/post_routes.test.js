const request = require('supertest')
const app = require('../app')
const mongoose = require('mongoose')

beforeAll(done => {
    done()
})

afterAll(done => {
    mongoose.connection.close()
    done()
})

describe("This is post API test", () => {
    test("test post get API", async() => {
        const response = await request(app).get('/post')
        expect(response.statusCode).toEqual(200)
    })
})