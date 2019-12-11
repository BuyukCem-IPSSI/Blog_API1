const mongoose = require('mongoose');
const commentModel = require('../models/commentModel');
const Comment = mongoose.model("Comment");

exports.get_all_comments = (req, res) => {
    Comment.find({post_id: req.params.post_id}, (error, posts) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
        else {
            res.status(200);
            res.json(posts);
        }
    })
};