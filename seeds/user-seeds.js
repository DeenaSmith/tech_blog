
const sequelize = require('../config/connection');
const { User, Post } = require('../models');


const userdata = [
    {
        username: 'sassywarlock1',
        password: 'headvoicesfortheWIN',
    },
    {
        username: 'rAnGer01',
        password: 'underratedCRITS',
    },
    {
        username: 'rogueyroguerogue',
        password: 'uNowHaveEmptyPockets',
    },
];


const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });



module.exports = seedUsers;
