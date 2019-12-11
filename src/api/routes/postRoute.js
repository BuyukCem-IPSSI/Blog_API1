module.exports = (app) => {
    const postController = require('../controllers/postController');

    app.route('/posts')
        .get(postController.list_all_posts)
        .post(postController.create_a_post);

    app.route('/posts/:posts_id')
        .get(postController.get_a_post)
        .delete(postController.delate_a_post)
        .put(postController.update_a_post);
};