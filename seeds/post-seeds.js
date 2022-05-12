
const { Post } = require('../models');


const postdata = [
    {
        title: 'Wow!',
        body: 'Holy cow! I can not beleve I made the first post!',
        user_id: 1,
    },
    {
        title: '...the best dev ever',
        body: 'Deena is the best dev ever',
        user_id: 2,
    },
    {
        title: 'Wrong blog...',
        body: 'Whoops, I thought this was a dnd blog. I cast misty step out of here.',
        user_id: 3,
    },
];



const seedPosts = () => Post.bulkCreate(postdata);



module.exports = seedPosts;