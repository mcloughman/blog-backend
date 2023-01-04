
const express = require("express");

const Post = require("../models/postModel")
const {createPost, getPosts, getPost, updatePost, deletePost} = require("../controllers/postController")
const requireAuth = require("../middleware/requireAuth") // I'm only going to use middleware of selected POST routes
const router = express.Router();


// GET all blogs
router.get("/api/posts", getPosts)
// GET a single blog
router.get("/api/posts/:id", getPost)

// POST a new blog
router.post("/api/posts", requireAuth, createPost)
// DELETE a blog
router.delete("/api/posts/:id", requireAuth, deletePost)
// UPDATE a new blog
router.patch("/api/posts/:id", requireAuth, updatePost)

module.exports = router;    