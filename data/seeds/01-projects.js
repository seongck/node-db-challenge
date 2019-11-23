
exports.seed = function(knex) {
  return knex('projects').insert([
    {id: 1, name: 'Get a software job', description: 'Get a software job in Seattle that pays over $75,000 a year', completed: 0},
    {id: 2, name: 'Bulk up to 160lbs', description: 'Hit a bodyweight of 160lbs at 12% bodyfat', completed: 0},
  ]);
};
