const { Driver, Team } = require('../db')

module.exports = async (req, res) => {

    const { id } = req.params

    try {
        const driver = await Driver.findOne({
            where: {
                id
            },
            include: {
                model: Team,
                as: 'teams',
                through: { attributes: [] }
            }
        })
        if(!driver){
            return res.status(404).json('This driver is not exist')
        }
        const teams = await driver.removeTeams(driver.teams)
        const _delete = await Driver.destroy({ where: { id } })
        res.status(200).json([driver, teams, _delete])
    } catch (error) {
        res.status(500).json(error.message)
    }

}