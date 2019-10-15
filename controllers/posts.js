const knex = require("../db/knex");

exports.getAllPosts = (req, res) => {
  knex("posts").then(posts => res.json(posts));
};

exports.getOnePost = (req, res) => {
  knex("posts")
    .where("id", req.params.id)
    .then(post => res.json(post));
};

exports.addPost = (req, res) => {
  knex("posts")
    .insert(req.body)
    .returning("*")
    .then(newUser => res.json(newUser));
};

exports.updatePost = (req, res) => {
  knex("posts")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedPost => res.json(updatedPost));
};

exports.removePost = (req, res) => {
  knex("posts")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(deletedPost => res.json(deletedPost));
};
