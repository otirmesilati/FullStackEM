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
    var retId = ""

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
        retId = response.body._id

        expect(retMessage).toEqual(message)
        expect(retSender).toEqual(sender)
        expect(retId).not.toEqual(null)
    })

    test("test get post by id API", async() => {

        const response = await request(app).get('/post/' + retId)
        expect(response.statusCode).toEqual(200)

        const retMessage = response.body.message
        const retSender = response.body.sender
        const retId2 = response.body._id

        expect(retMessage).toEqual(message)
        expect(retSender).toEqual(sender)
        expect(retId2).toEqual(retId)

    })
    
    test("test get post by sender API", async() => {

        const response = await request(app).get('/post?sender=' + sender)
        expect(response.statusCode).toEqual(200)

        const retMessage = response.body[0].message
        const retSender = response.body[0].sender
        const retId2 = response.body[0]._id

        expect(retMessage).toEqual(message)
        expect(retSender).toEqual(sender)
        //expect(retId2).toEqual(retId)

    })

})