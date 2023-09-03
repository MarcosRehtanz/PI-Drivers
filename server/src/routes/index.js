const { Router } = require("express");
const getDrivers = require("../controllers/getDrivers");
const getIdDriver = require("../controllers/getIdDriver");
const getNameDriver = require("../controllers/getNameDriver");
const postDriver = require("../controllers/postDriver");
const getTeam = require("../controllers/getTeam");
const putDriver = require("../controllers/putDriver");
const router = Router();

//TODO - router

// * → /Drivers
router.get('/drivers/name', getNameDriver)
router.get('/drivers/:id', getIdDriver)
router.get('/drivers', getDrivers)
router.post('/drivers', postDriver)
router.put('/drivers', putDriver)

// * → /Teams
router.get('/teams', getTeam)


module.exports = router;
