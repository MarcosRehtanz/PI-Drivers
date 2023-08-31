const axios = require('axios')
const { Driver, Team } = require('../db')

module.exports = async (req, res) => {

    const { id } = req.params

    try {
        if (isNaN(+id)) {
            const driver = await Driver.findOne({
                where: { id: id },
                include: {
                    model: Team,
                    as: 'teams',
                    attributes: ['name'],
                    through: { attributes:[], }
                }
            })
            console.log(driver.teams.map(team=>team.name));
            res.status(200).send(driver)
        } else {
            const { name, description, nationality, image, dob, teams } = (await axios.get(`http://localhost:5000/drivers/${id}`)).data
            
            const driver = {
                name: name.forename,
                surname: name.surname,
                description: description,
                nationality: nationality,
                image: image.url,
                birthdate: dob,
                teams: (!teams) ? [] :teams.split(',').map(team=>{return {name:team.trim()}})
            }
            res.status(200).send(driver)
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send( error.message )
    }

}
