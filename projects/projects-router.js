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

router.get('/:id/resources', (req, res) => {
  const { id } = req.params;

  Projects.getResources(id)
    .then( resources => {
      res.json(resources); 
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources', error: err });
    });
});

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  Projects.getTasks(id)
    .then( tasks => {
      const convertedTasks = [...tasks].map( task => {
        task.completed = Boolean(task.completed);
        return task;
      });
      res.json(convertedTasks); 
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks', error: err });
    });
});

router.post('/', (req, res) => {
});

router.post('/:id/resources', (req, res) => {
});

router.post('/:id/tasks', (req, res) => {
});

module.exports = router;
