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

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  Projects.getProject(id)
    .then( project => {
      const convertedProject = [...project].map( project => {
        project.completed = Boolean(project.completed);
        return project;
      });
      res.json(convertedProject);
    });
});

router.get('/resources', (req, res, next) => {
  Projects.getAllResources()
    .then(resources => {
      res.json(resources);
    })
    .catch( err => {
      next({ message: err });
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

  if (project.hasOwnProperty('completed') === false) {
    project.completed = 0;
  }

  if( !project.name ) {
    next({ status: 422, message: 'Project name required' });
  } else {
    Projects.addProject(project)
      .then( ids => {
        (ids.length > 0)
          ? res.json({ message: 'Project successfully added' })
          : next({ message: 'Failed to add project' });
      })
  }
});

router.post('/resources', (req, res, next) => {
  const resource = req.body;

  if( !resource.name ) {
    next({ status: 422, message: 'Resource name required' });
  } else {
    Projects.addResource(resource)
      .then( ids => {
        (ids.length > 0)
          ? res.json({ message: 'Resource successfully added' })
          : next({ message: 'Failed to add resource' });
      })
  }

});

router.post('/:id/tasks', (req, res, next) => {
  const { id } = req.params;
  const task = req.body;
  task.project_id = id;

  if (task.hasOwnProperty('completed') === false) {
    task.completed = 0;
  }

  if( !task.description) {
    next({ status: 422, message: 'Task description required' });
  } else {
    Projects.addTask(id, task)
      .then( ids => {
        ( ids.length > 0)
          ? res.json({ message: 'Task successfully added' })
          : next({ message: 'Failed to add task' });
      });
  }
});

module.exports = router;








