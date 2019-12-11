const mongoose = require('mongoose');
const postModel = require('../api/models/postModel');
const Post = mongoose.model("Post");


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
exports.create_a_post = (req, res) => {
    let new_post = new Post(req.body);
    new_post.save((error, post) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        } else {
            res.status(201);
            res.json(post);
        }
    })
};
exports.get_a_post = (req, res) => {
    //let get_post = mongoose.model("Post");
    Post.findById({"_id": req.params.posts_id}, (error, post) => {
        if (error) {
            res.status(500);
        }
        res.status(200);
        res.json(post);

    });
};
exports.delate_a_post = (req, res) => {
    Post.remove({"_id": req.params.posts_id}, (error) => {
        if (error) {
            res.status(500);
        }
        res.status(200);
        res.json({Message: "Article supprimé"});

    });
};
exports.update_a_post = (req, res) => {
    Post.findOneAndUpdate({"_id": req.params.posts_id}, req.body, {new: true}, function (err, post) {
        if (err) {
            res.status(500);
        }
        res.status(200);
        res.json(post);
    });
};
