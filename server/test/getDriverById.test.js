const app = require('../src/server')
const session = require('supertest')
const request = session(app)



describe('Get driver by ID', () => {

    test('response with a status 200', async () => {
        await request.get('/drivers/200').expect(200)
    })

    test('response with the corrects properties', async () => {
        const {body} = await request.get('/drivers/132');

        expect(body).toHaveProperty('id')
        expect(body).toHaveProperty('name')
        expect(body).toHaveProperty('surname')
        expect(body).toHaveProperty('birthdate')
        expect(body).toHaveProperty('description')
        expect(body).toHaveProperty('nationality')
        expect(body).toHaveProperty('image')
        expect(body).toHaveProperty('teams')
    })

    test('Driver not found by id integer',async () => {
        await request.get('/drivers/1026').expect(500)
    })
    test('Driver not found by uuid',async () => {
        await request.get('/drivers/3f23f-ds').expect(500)
    })

})