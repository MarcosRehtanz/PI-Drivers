const axios = require('axios')
const { Driver, Driver_Team, Team } = require('../db')

module.exports = async (req, res) => {

    try {
        const { data } = await axios.get('http://localhost:5000/drivers')
        const driversAPI = data.map( ({id,name, description, nationality, image, dob, teams}) => {
            return {
                id,
                name: name.forename,
                surname: name.surname,
                description: description,
                nationality: nationality,
                image: image.url,
                birthdate: dob,
                teams: (!teams) ? '' :teams.split(',').map(team=>{return{name:team.trim()}})
            }
        })
        const driversDB = await Driver.findAll( {
            include: {
                model: Team,
                as: 'teams',
                attributes: ['name'],
                through: {attributes: [],}
            } 
        })
        res.status(200).send([...driversAPI, ...driversDB])
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message })
    }

}