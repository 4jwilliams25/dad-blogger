const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

router.get("/posts", postsController.getAllPosts);
router.get("/posts/:id", postsController.getOnePost);
router.post("/posts", postsController.addPost);
router.patch("/posts/:id", postsController.updatePost);
router.delete("/posts/:id", postsController.removePost);

module.exports = router;
