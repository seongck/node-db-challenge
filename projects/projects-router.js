const express = require('express');
const Projects = require('./projects-model.js');
const router = express.Router();

router.get('/', (req, res) => {
  Projects.getProjects()
    .then( projects => {
      const convertedProjects = [...projects].map( project => {
        project.completed = Boolean(project.completed);
        return project;
      });
      res.json(convertedProjects);
    })
    .catch( err => {
      res.status(500).json({ message: 'Failed to get projects', error: err });
    });
});

module.exports = router;
