module.exports = (app) => {
    const commentController = require('../controllers/commentsController');

    app.route('/posts/:post_id/comments')
        .get(commentsController.get_all_comments)
        .post(commentsController.create_a_comment);

    app.route('/comments/:comment_id')
        .get(commentController.get_a_comment)
        .put(commentController.update_a_comment)
        .delate(commentController.delate_a_comment);
};