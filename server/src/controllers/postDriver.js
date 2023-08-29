const { Driver, Team } = require('../db')

module.exports = async (req, res) => {

    const newDriver = req.body
    if (!newDriver.name || !newDriver.surname || !newDriver.description || !newDriver.nationality || !newDriver.birthdate){
        return res.status(400).send('Información incompleta')
    }

    
    try {
        const driver = await Driver.create(newDriver)
        
        let teams = newDriver.teams.split(',')
        teams.map( async name => {
            const team = await Team.findOne( { where: {name: name.trim()} } )
            driver.addTeam(team)
        } )

        res.status(200).send({message: 'All Correct',driver, })
    } catch (error) {
        res.status(500).send({error: error.message})
    }

}
