const app = require('../src/server')
const session = require('supertest')
const request = session(app)

const { Driver, Driver_Team, Team } = require('../src/db')

describe('Post driver', () => {

    const driver = {
        name: 'Arturo',
        surname: 'Rodringües',
        birthdate: '1994-02-12',
        description: 'This is a dumb description',
        nationality: 'England',
        image: 'url',
        teams: ['Ferrari', 'Jordan'],
    }
    const _deleteDriver = { id:'' }
    afterEach(async() => {
        try {
            const _driver = await Driver.findOne({
                where: {
                    id:_deleteDriver.id
                },
                include: {
                    model: Team,
                    as: 'teams',
                    through: { attributes: [] }
                }
            })
            if(!_driver) return;
            await _driver.removeTeams(_driver.teams)
            await Driver.destroy({ where: { id: _deleteDriver.id } })
        } catch (error) {
            
        }
    })

    test('Correct response → status 200', async () => {
        const response = await request.post('/drivers').send(driver)
        _deleteDriver.id = response.body.id
        driver.id = response.body.id
        expect(response.status).toBe(200)
    })

    test('Incomplete information → status: 400', async() => {
        const response = await request.post('/drivers').send({})
        expect(response.status).toBe(400)
        expect(response.res.text).toBe('Incomplete information')
    })

    test('Reject → status: 500', async() => {
        const response = await request.post('/drivers').send({...driver, birthdate: 'text'})
        expect(response.status).toBe(500)
    })

})