const { Team } = require('../db')

module.exports = async (req,res) => {

    try {
        const teams = await Team.findAll()
        res.status(200).send( teams.sort((a,b) => a.name.localeCompare(b.name)) )
    } catch (error) {
        
    }

}
