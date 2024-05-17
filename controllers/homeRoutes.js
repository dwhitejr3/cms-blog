const router = require('express').Router();
const { User, Article } = require('../models');



router.get('/', async (req,res)=> {
    try {
        const articleData = await Article.findAll();

        const articles = articleData.map((article) => article.get ({plain:true}));

        res.render('homepage', {
            articles,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/article/:id', async (req,res) => {
    try {
        const articleData = await Article.findByPk(req.params.id);

        const articles = articleData.get({plain: true});

        res.render('article', {
            ...articles,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/homepage');
        return;
    }

    res.render('login');
});










module.exports = router;

