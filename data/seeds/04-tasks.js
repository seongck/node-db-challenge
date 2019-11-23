exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      id: 1,
      description: 'Study Full Stack Web Development',
      notes: 'Use Lambda School curriculum and supplement with side projects and courses',
      completed: 0,
      project_id: 1
    },
    {
      id: 2,
      description: 'Prep for technical interviews',
      notes: `Use LeetCode and Youtube channels like Tushar Roy and Abdul Bari's`,
      completed: 0,
      project_id: 1
    },
    {
      id: 3,
      description: 'Weight Training Routine',
      notes: 'Workout Monday, Wednesday, and Friday on a Push/Legs/Pull splir',
      completed: 1,
      project_id: 2
    },
    {
      id: 4,
      description: 'Consume at least 2,800 calories worth of food daily',
      notes: 'Eat clean, avoid processed and junk foods',
      completed: 0,
      project_id: 2
    }
  ]);

};
