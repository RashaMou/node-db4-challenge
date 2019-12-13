exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .text("recipe_name", 128)
        .unique()
        .notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .text("ingredient_name", 128)
        .unique()
        .notNullable();
    })
    .createTable("recipe_insructions", tbl => {
      tbl.increments();
      tbl.text("step_number").notNullable();
      tbl.text("step_description").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.primary(["recipe_id", "ingredient_id"]);
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
      tbl
        .integer("quantity")
        .unsigned()
        .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipe_instructions")
    .dropTableIfExists("recipe_ingredients");
};
