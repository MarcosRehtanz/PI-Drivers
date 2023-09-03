const { Driver, Team } = require('../db')

module.exports = async (req, res) => {

    const { id, name, surname, nationality, image, birthdate, description, teams, oldTeams } = req.body

    try {
        console.log(id);
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

        const _teams = teams.split(', ')
        const _oldTeams = oldTeams.split(', ')
        const addTeams = _teams.filter(team => !_oldTeams.includes(team))
        const deleteTeams = _oldTeams.filter(team => !_teams.includes(team))

        const driver = await Driver.findByPk(id)
        addTeams.map(async team => {
            const _addTeam = await Team.findOne({ where: { name: team } })
            await driver.addTeam(_addTeam)
        })
        deleteTeams.map(async team => {
            const _removeTeam = await Team.findOne({ where: { name: team } })
            await driver.removeTeam(_removeTeam)
        })

        res.status(200).json('llegué')
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message)
    }

}