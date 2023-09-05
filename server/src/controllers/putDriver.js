const { Driver, Team } = require('../db')

module.exports = async (req, res) => {

    const { id, name, surname, nationality, image, birthdate, description, teams, oldTeams } = req.body

    try {


        await Driver.update({
            name,
            surname,
            nationality,
            image,
            birthdate,
            description,
        }, {
            where: {
                id
            }
        })

        // const _teams = teams.split(', ')
        // const _oldTeams = oldTeams.split(', ')
        const addTeams = teams.filter(team => !oldTeams.includes(team))
        const deleteTeams = oldTeams.filter(team => !teams.includes(team))

        const driver = await Driver.findByPk(id)

        await Promise.all( addTeams.map(async team => {
            const _addTeam = await Team.findOne({ where: { name: team } })
            await driver.addTeam(_addTeam)
        }))
        await Promise.all(deleteTeams.map(async team => {
            const _removeTeam = await Team.findOne({ where: { name: team } })
            await driver.removeTeam(_removeTeam)
        }))


        const editDriver = await Driver.findOne({
            where: {
                id
            },
            include: {
                model: Team,
                as: 'teams',
                attributes: ['name'],
                through: { attributes: [], }
            }
        })

        res.status(200).json(editDriver)
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message)
    }

}