const axios = require('axios')
const { Driver, Team } = require('../db')

module.exports = async (req, res) => {

    const { id } = req.params

    try {
        let driver;
        if (isNaN(Number(id))) {
            driver = await Driver.findOne({
                where: { id: id },
                include: {
                    model: Team,
                    as: 'teams',
                    attributes: ['name'],
                    through: { attributes:[], }
                }
            })
        } else {
            const { name, description, nationality, image, dob, teams } = (await axios.get(`http://localhost:5000/drivers/${id}`)).data
            
            driver = {
                name: name.forename,
                surname: name.surname,
                description: description,
                nationality: nationality,
                image: image.url,
                birthdate: dob,
                teams: (!teams) ? '' :teams.split(',').map(team=>{return{name:team.trim()}})
            }
        }
        res.status(200).send(driver)
    } catch (error) {
        console.log(error.message);
        res.status(500).send( error.message )
    }

}
