const express = require('express');

const helmet = require('helmet');
const ProjectRouter = require('./projects/projects-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/projects', ProjectRouter);

function errorHandler(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
}

server.use(errorHandler);

module.exports = server;
