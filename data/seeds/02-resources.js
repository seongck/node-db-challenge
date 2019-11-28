
exports.seed = function(knex) {
  return knex('resources').insert([
    {
      id: 1,
      name: 'Lambda School',
      description: 'A 9+ month Computer Science & Software Engineering Academy that provides an immersive hands-on curriculum with a focus on computer science, web and mobile development, UX design, and data science.'
    },
    {
      id: 2,
      name: 'LinkedIn',
      description: `The world's largest professional network with nearly 660+ million users in more than 200 countries and territories worldwide.`
    },
    {
      id: 3,
      name: '24 Hour Fitness',
      description: 'Gym thats open 24 hours a day'
    },
    {
      id: 4,
      name: 'ON Whey Protein',
      description: 'Optimum Nutrition 100% Gold Standard Whey Protein'
    }
  ]);
};
