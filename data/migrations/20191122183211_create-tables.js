
exports.up = function(knex) {
  return (
    knex.schema
      .createTable('projects', tbl => {
        tbl.increments('id');

        tbl.string('name', 255).notNullable();

        tbl.string('description', 255);

        tbl.boolean('completed').notNullable();
      })
      .createTable('resources', tbl => {
        tbl.increments('id');

        tbl.string('name', 255).notNullable().unique();

        tbl.string('description', 255);
      })
      .createTable('projects_resources', tbl => {
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('projects.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');

        tbl.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('resources.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');

        tbl.primary(['project_id', 'resource_id']);
      })
      .createTable('tasks', tbl => {
        tbl.increments('id');

        tbl.string('description', 255).notNullable();

        tbl.text('notes');

        tbl.boolean('completed').notNullable();

        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('projects.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
  )
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects_resources')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  )
};
