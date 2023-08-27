const { Driver } = require('../db')

module.exports = async (req,res) => {

    const {name} = req.query

    try {
        const response = await Driver.findAll({
            // attributes: ['id', 'name'],
            where: {
                name
            }
        })
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send({error: error.message})
    }

}
