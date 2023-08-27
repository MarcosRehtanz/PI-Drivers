const { Driver } = require('../db')

module.exports = async (req,res) => {

    try {
        const drivers = await Driver.findAll()
        res.status(200).send( drivers )
    } catch (error) {
        res.status(500).send({ error: error.message })
    }

}