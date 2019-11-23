const express = require('express');

const helmet = require('helmet');
const ProjectRouter = require('./projects/projects-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/projects', ProjectRouter);

module.exports = server;
