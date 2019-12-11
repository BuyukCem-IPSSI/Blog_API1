const mongoose = require('mongoose');
const Post = mongoose.model("Post");
const commentsModel = require('../api/models/commentsModel');

exports.list_all_posts = (req, res) => {
    Post.find({}, (error, posts) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        } else {
            res.status(200);
            res.json(posts);
        }
    })
};