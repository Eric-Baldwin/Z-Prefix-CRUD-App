exports.up = function(knex) {
  return knex.schema.table('users', (table) => {
    table.enu('role', ['inventory_manager', 'user']).defaultTo('inventory_manager');
  });
};

exports.down = function(knex) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('role');
  });
};
