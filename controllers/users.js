const knex = require("../db/knex");

exports.getAllUsers = (req, res) => {
  // Long Hand
  //   knex
  //     .select()
  //     .table("users")
  //     .then(users => res.json(users));

  // Short hand
  knex("users").then(users => res.json(users));
};

exports.getOneUser = (req, res) => {
  // Long Hand
  //   knex
  //     .select()
  //     .table("users")
  //     .where("id", req.params.id)
  //     .then(user => res.json(user));

  // Short hand
  knex("users")
    .where("id", req.params.id)
    .then(user => res.json(user));
};

exports.addUser = (req, res) => {
  // Long Hand
  knex("users")
    .insert(req.body)
    .returning("*")
    .then(newUser => res.json(newUser));
};

exports.updateUser = (req, res) => {
  knex("users")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedUser => res.json(updatedUser));
};

exports.removeUser = (req, res) => {
  knex("users")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(deletedUser => res.json(deletedUser));
};
