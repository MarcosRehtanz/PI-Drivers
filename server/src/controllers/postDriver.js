const { Driver, Team } = require('../db')
const { Op } = require('sequelize')

module.exports = async (req, res) => {

    const { name, surname, birthdate, description, image, nationality, teams } = req.body
    if (!name || !surname || !description || !nationality || !birthdate || !teams) {
        return res.status(400).send('Incomplete information')
    }


    try {
        const [driver, created] = await Driver.findOrCreate({
            where: {
                name: {
                    [Op.iLike]: name
                },

                surname: {
                    [Op.iLike]: surname
                },
                birthdate
            },
            defaults: {
                name,
                surname,
                description,
                nationality,
                image,
            }
        })
        console.log('Mensage', driver);
        if (!created) return res.status(409).send('User exist')

        teams.map(async name => {
            const team = await Team.findOne({ where: { name: name } })
            driver.addTeam(team)
        })

        res.status(200).send(driver)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }

}
