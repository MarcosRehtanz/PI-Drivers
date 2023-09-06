const { Driver, Team } = require('../db')

module.exports = async (req, res) => {

    const newDriver = req.body
    if (!newDriver.name || !newDriver.surname || !newDriver.description || !newDriver.nationality || !newDriver.birthdate || !newDriver.teams){
        return res.status(400).send('Información incompleta')
    }

    
    try {
        const driver = await Driver.create(newDriver)
        
        newDriver.teams.map( async name => {
            const team = await Team.findOne( { where: {name: name} } )
            driver.addTeam(team)
        } )

        res.status(200).send(driver)
    } catch (error) {
        res.status(500).send({error: error.message})
    }

}
