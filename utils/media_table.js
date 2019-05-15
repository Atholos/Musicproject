'use strict';
const db = require('./database');

// Select all images from Uploadable table
const select = (res) => {
  db.connect().query(
      'SELECT * FROM Uploadable',
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        if (err == null) {
          res.send(results);
        } else {
          console.log('Select error: ' + err);
        }
      },
  );
};
// User avatar
const selectMyAvatar = (data, res) => {
  db.connect().query(
      'SELECT * FROM Profilepic WHERE Picuser = ?',
      data,
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        if (err == null) {
          res.send(results);
        } else {
          console.log('Selectimage error: ' + err);
        }
      },
  );
};


// Select images by UserID
const selectMyImages = (data, res) => {
  db.connect().query(
      'SELECT * FROM Uploadable WHERE UserID = ?',
      data,
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        if (err == null) {
          res.send(results);
        } else {
          console.log('Selectimage error: ' + err);
        }
      },
  );
};

// Insert image to database
const insert = (data, res) => {

  db.connect().execute(
// Insert information to database according to data
      'INSERT INTO Uploadable (Description, Title, Thumbnail, Image, Original, UserID, ID) VALUES (?, ?, ?, ?, ?, ?, ?);',
      data,
      (err, results) => {
        if (err == null) {
          res.send(results);
        } else {
          console.log('Insert error: ' + err);
        }
      },
  );
};
// Insert image to database, not in use
const profilepic = (data, res) => {
// Check DB for existing profilepicture of user
  console.log('dbcheck:' + data);
  db.connect().execute(
// Insert information to database according to data
      'INSERT INTO Profilepic (Picuser, Image) VALUES (?, ?);',
       data,
      (err, results) => {
        if (err == null) {
          res.send(results);
        } else {
          console.log('Insert error: ' + err);
        }
      },
  );
};

//Deleting images
const del = (data, res) => {
  // simple query
//Check FileID for file and UserID for referencing the file to the current user, if wrong user, can't delete.
  db.connect().execute(
      'DELETE FROM Uploadable WHERE FileID = ? AND UserID = ?;', // can delete only current user's images
      data,
      (err, results, fields) => {
        //console.log('results: '+results); // results contains rows returned by server
        //console.log('fields: '+fields); // fields contains extra meta data about results, if available
        if (err == null) {
          res.send(results);
        } else {
          console.log('Delete error: ' + err);
        }
      },
  );
};

const login = (data, callback) => {
// Finds username with data
  db.connect().execute(
      'SELECT * FROM Users WHERE Username = ?;',
      data,
      (err, results, fields) => {
        //console.log('results', results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log('Login error: ' + err);
        if (results.length > 0) {
          callback(results);
        } else {
          console.log('User doesnt exist');
        }
      },
  );
};
// Register user
const register = (data, next) => {
// Database check for existing user
  db.connect().query(
      'SELECT Username, Email FROM Users WHERE `Username` = ? AND `Email` = ?',
      data,
      (err, results, fields) => {
        if (results.length === 0) {
//Insert user to database
          db.connect().execute(
              'INSERT INTO Users (Username,Email,Password,Admin) VALUES (?,?,?,0);',
              data,
              (err, results, fields) => {
                // console.log(' Register results: ' + results); // results contains rows returned by server
                // console.log(fields); // fields contains extra meta data about results, if available
                console.log('Register errors: ' + err);

              },
          );
        } else {
          //TODO Notify User that Email / Username has been taken
          console.log('Username/Email taken');
        }
        next();
      },
  );

};

//Like query and exec
//Gets likes for the appointed image from the db then adds
//one point to it and saves
const like = (data, next) => {
  db.connect().query(
      'SELECT Likes FROM Uploadable WHERE `FileID` = ?',
      data,
      (err, results, fields) => {
        let likes = JSON.stringify(results);
        //console.log('Strinified: ' + likes);
        let parse = JSON.parse(likes);
        //console.log('parse: ' + parse);
        //console.log('Parsed likes: ' + parse[0].Likes);
        let likeAmount = parse[0].Likes;
        let total = likeAmount + 1;
        //console.log('total: ' + total);
        //console.log('before exec: '+data)
        db.connect().execute(
            `UPDATE Uploadable SET Likes = ${total} WHERE FileID = ${data[0]}`,
            data,
            (err, results, fields) => {
              console.log('results: ' + results);
            },
        );
      });
};

module.exports = {
  select: select,
  selectMyImages: selectMyImages,
  insert: insert,
  del: del,
  login: login,
  register: register,
  like: like,
  profilepic: profilepic,
};
