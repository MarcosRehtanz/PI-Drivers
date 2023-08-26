const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

server.use('/:id', (req,res) => res.status(200).send({
    param: req.params,
    query: req.query,
    body: req.body,
    response:'Server connected'
}))

module.exports = server;
