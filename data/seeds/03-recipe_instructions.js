exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          id: 1,
          step_number: "1",
          step_description: "Spread peanut butter on bread",
          recipe_id: "1"
        },
        {
          id: 2,
          step_number: "2",
          step_description: "Spread jelly on bread",
          recipe_id: "1"
        },
        {
          id: 3,
          step_number: "3",
          step_description: "Assemble two sides",
          recipe_id: "1"
        },
        {
          id: 4,
          step_number: "1",
          step_description: "Crack eggs into bowl",
          recipe_id: "2"
        },
        {
          id: 5,
          step_number: "2",
          step_description: "Whisk eggs",
          recipe_id: "2"
        },
        {
          id: 6,
          step_number: "3",
          step_description: "Butter pan",
          recipe_id: "2"
        },
        {
          id: 7,
          step_number: "4",
          step_description: "Cook eggs in pan",
          recipe_id: "2"
        }
      ]);
    });
};
