const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title: {
        type: String,
        required: "Le titre est requis"
    },
    message: {
        type: String,
        required: "Le message est requis"
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    post_id: {
      type: String
    }

});
module.exports = mongoose.model('Post', postSchema);