const express = require('express');
const Projects = require('./projects-model.js');
const router = express.Router();

router.get('/', (req, res, next) => {
  Projects.getProjects()
    .then( projects => {
      const convertedProjects = [...projects].map( project => {
        project.completed = Boolean(project.completed);
        return project;
      });
      res.json(convertedProjects);
    })
    .catch( err => {
      next({ message: 'Failed to get projects'});
    });
});

router.get('/:id/resources', (req, res, next) => {
  const { id } = req.params;

  Projects.getResources(id)
    .then( resources => {
      res.json(resources); 
    })
    .catch(err => {
      next({ message: 'Failed to get resources'});
    });
});

router.get('/:id/tasks', (req, res, next) => {
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
      next({ message: 'Failed to get tasks' });
    });
});

router.post('/', (req, res, next) => {
  const project = req.body;

  if( !project.name ) {
    next({ status: 422, message: 'Project name required' });
  } else if (project.hasOwnProperty('completed') === false) {
    next({ status: 422, message: 'Project completion status required' }); 
  } else {
    Projects.addProject(project)
      .then( ids => {
        (ids.length > 0)
          ? res.json({ message: 'Project successfully added' })
          : next({ message: 'Failed to add project' });
      })
  }
});

router.post('/:id/resources', (req, res) => {
});

router.post('/:id/tasks', (req, res) => {
});

module.exports = router;
