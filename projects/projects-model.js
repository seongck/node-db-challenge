const db = require('./../data/db-config.js');

function getProjects() {
  return db('projects');
}

function getResources(project_id) {
  return db('projects_resources')
    .join('projects', 'projects_resources.project_id', 'projects.id')
    .join('resources', 'projects_resources.resource_id', 'resources.id')
    .select('resources.id', 'projects.name AS project_name', 'resources.name AS resource_name', 'resources.description')
    .where({ 'projects.id': project_id });
}

function getTasks(project_id) {
  return db('tasks')
    .join('projects', 'projects.id', 'tasks.project_id')
    .select('tasks.id', 'projects.name AS project_name', 'tasks.description AS task_description', 'tasks.notes AS task_notes', 'tasks.completed')
    .where({ 'projects.id': project_id });
}

function addProject() {
}

function addResource(project_id) {
}

function addTask(project_id) {
}

module.exports = {
  getProjects,
  getResources,
  getTasks
};
