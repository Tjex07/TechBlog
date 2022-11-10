const router = require('express').Router();

const { Content, User } = require('../models');

// GET all data for homepage
router.get('/', async (req, res) => {
  try {
      res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

// app.use("/assets", express.static('./assets/'));

router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    // Remove the session variables
    req.session.destroy(() => {
      res.render('homepage');
    });
  } else {
    res.render('homepage');
  }
});

//Dashboard Route
router.get('/dashboard', async (req, res) => {
  try {
      res.render('dashboard', {
        loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Register Route
router.get('/register', async (req, res) => {
  try {
      res.render('register', {
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const contentData = await Content.findAll({
      include: [User],
    });

    const content = postData.map((content) => content.get({ plain: true }));

    res.render('all-content', { content });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
