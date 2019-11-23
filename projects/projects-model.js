const db = require('./../data/db-config.js');

function getProjects() {
  return db('projects');
}

module.exports = {
  getProjects
};
