const request = require('supertest')
const app = require('../server')
const mongoose = require('mongoose')

beforeAll(done => {
    done()
})

afterAll(done => {
    mongoose.connection.close()
    done()
})

describe("This is post API test", () => {
    
    const message = "this is my test message"
    const sender = "test_sender"

    test("test post get API", async() => {
        const response = await request(app).get('/post')
        expect(response.statusCode).toEqual(200)
    })

    test("test post post API", async() => {
        const response = await request(app).post('/post').send({
            "message": message,
            "sender": sender
        })
        expect(response.statusCode).toEqual(200)

        const retMessage = response.body.message
        const retSender = response.body.sender
        const retId = response.body._id

        expect(retMessage).toEqual(message)
        expect(retSender).toEqual(sender)
        expect(retId).not.toEqual(null)
    })
})