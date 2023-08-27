const { Driver } = require('../db')

module.exports = async (req,res) => {

    const {id} = req.params

    try {
        const driver = await Driver.findOne( { where: { id: id } } )
        res.status(200).send( driver )
    } catch (error) {
        res.status(500).send({ error: error.message })
    }

}
