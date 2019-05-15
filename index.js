const express = require('express');
require('dotenv').config();
const mediaTable = require('./utils/media_table');
const multer = require('multer');
const db = require('./utils/database');
const bodyParser = require('body-parser');
const pass = require('./utils/pass');
const session = require('express-session');
const passport = require('passport');
const resize = require('./utils/resize');

const app = express();
app.use(session({
  secret: 'do not touch',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: false,
    maxAge: null,
  },
}));

const upload = multer({dest: 'public/uploads/'});
const profile = multer({dest: 'public/CSS/images/profilepics/'});

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/modules', express.static('node_modules'));

// Select all images from database
app.get('/all', (req, res) => {
  mediaTable.select(res);
  // res.send(200);
});
// Select own images from database
app.get('/my', pass.loggedIn, (req, res) => {
  const data = [req.user.UserID];
  mediaTable.selectMyImages(data, res);
});

// Uploading image
app.post('/image', pass.loggedIn, upload.single('my-image'),
    (req, res, next) => {
      next();

    });

// Creating a smaller image as thumbnail
app.use('/image', (req, res, next) => {
  resize.doResize(req.file.path, 300,
      './public/thumbs/thumb_' + req.file.filename).
      then(data => {
        next();
      });

});
app.use('/image', (req, res, next) => {
  const data = [
    req.body.Description,
    req.body.Title,
    'thumbs/thumb_' + req.file.filename,
    'uploads/' + req.file.filename,
    'uploads/' + req.file.filename,
    req.user.UserID,
    req.body.Category,
  ];
  mediaTable.insert(data, res);
});
// Upload profile picture
app.post('/profpic', profile.single('my-profilepic'),
    (req, res, next) => {
      next();
    });
// resize and round profile picture
app.use('/profpic', (req, res, next) => {
  resize.doRounded(req.file.path, 300,
      './public/CSS/images/profilepics/' + req.file.filename).then(data => {
    console.log('profpicdata:' + data);
    next();
  });
});

app.use('/profpic', (req, res, next) => {
  //Add profilepic to database
  const data = [
    req.user.UserID,
    './public/CSS/images/profilepics/' + req.file.filename,
  ];
  mediaTable.profilepic(data, res);
  console.log('profpic2data:' + data);
});
// get profilepicture
app.get('/myavatar', (req, res) => {
  mediaTable.selectMyAvatar(res);
  console.log('avatar:' + res);
});

// delete image
app.delete('/del/:FileID', pass.loggedIn, (req, res) => {
  const data = [
    req.params.FileID,
    req.user.UserID,
  ];
  mediaTable.del(data, res);
});

//logout, clearing connect.sid cookie and redirecting back to home page
app.get('/logout', (req, res, next) => {
  res.clearCookie('connect.sid', {path: '/'});
  res.redirect('./');
});

// authentication with custom callback (http://www.passportjs.org/docs/authenticate/)
app.post('/login', pass.login, (req, res) => {
  next();
});

// register new user, automatically login
app.post('/register', pass.register, pass.login);

//Like Middleware
app.use('/like', pass.loggedIn, (req, res, next) => {
  const data = [
    req.body.FileID,
    req.body.Likes,
  ];
  mediaTable.like(data, res);
});

app.listen(3000);
