const axios = require('axios')
const { Driver, Team } = require('../db')

module.exports = async (req, res) => {

    //FIXME - no llega correctamente la query
    try {
        const { name } = req.query
        console.log(name);
        const { data } = await axios.get(`http://localhost:5000/drivers?name.forename=${name}`);
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
        const driversDB = await Driver.findAll({
            where: { name },
            include: {
                model: Team,
                as: 'teams',
                attributes: ['name'],
                through: { attributes: [], }
            }
        })
        res.status(200).send([...driversAPI, ...driversDB])// teams)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message })
    }

}
