beforeAll(done => {
    done()
})

afterAll(done => {
    done()
})

describe("This is my first test", () => {
    test("This is my first test case", () => {
        const temp = 2
        expect(temp).toEqual(2)
    })
})