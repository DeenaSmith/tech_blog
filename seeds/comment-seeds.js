
const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'This is an interesting point, megaMana85, but is it really grounded?',
        user_id: 1,
        post_id: 2,
    },
    {
        comment_text: 'yep, I knew it would come to this one day...these days its all about AI',
        user_id: 2,
        post_id: 3,
    },
    {
        comment_text: 'Not the red button...nooooo! That activates skynet!',
        user_id: 3,
        post_id: 1,
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);



module.exports = seedComments;