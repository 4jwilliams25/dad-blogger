exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "John Connor",
          email: "BabyBear@galvanize.com",
          website: "terminatorshmerminator.com"
        },
        {
          name: "Sarah Connor",
          email: "MommaBear@galvanize.com",
          website: "terminatorshmerminator.com"
        },
        {
          name: "Kyle Reese",
          email: "PoppaBear@galvanize.com",
          website: "terminatorshmerminator.com"
        }
      ]);
    });
};
