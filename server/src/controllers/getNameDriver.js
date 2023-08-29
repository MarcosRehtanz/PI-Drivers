const { Driver, Team } = require('../db')

module.exports = async (req,res) => {

    const {name} = req.query

    try {
        const response = await Driver.findAll({
            where: { name },
            include: {
                model: Team,
                attributes: ['name'],
                through: { attributes:[], }
            }
        })
        res.status(200).send(response)// teams)
    } catch (error) {
        res.status(500).send({error: error.message})
    }

}
