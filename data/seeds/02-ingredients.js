
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, ingredient_name: 'Eggs'},
        {id: 2, ingredient_name: 'Peanut Butter'},
        {id: 3, ingredient_name: 'Jelly'}
        {id: 4, ingredient_name: 'Bread'}
        {id: 5, ingredient_name: 'Butter'}
      ]);
    });
};
