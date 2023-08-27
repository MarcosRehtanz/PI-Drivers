const {Driver} = require('../db')

module.exports = async (req, res) => {

    const driver = req.body
    if (!driver.name || !driver.surname || !driver.description || !driver.nationality || !driver.birthdate){
        return res.status(400).send('Información incompleta')
    }

    try {
        const response = await Driver.create(driver)
        res.status(200).send({message: 'All Correct',response})
    } catch (error) {
        res.status(500).send({error: error.message})
    }

}
