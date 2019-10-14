exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("posts").insert([
        {
          title: "Best Pickup Lines",
          body: "Come with me if you want to live!",
          user_id: 3
        },
        {
          title: "Title for Memoirs",
          body: "My Feelings About Robots Are Complicated",
          user_id: 2
        },
        {
          title: "Favorite Movie",
          body: "Time Traveler's Wife",
          user_id: 3
        }
      ]);
    });
};
