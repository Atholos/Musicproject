'use strict';
// upload image ********************

const frm = document.querySelector('#mediaform');

const sendForm = (evt) => {
  evt.preventDefault();
  const fd = new FormData(frm);
  const settings = {
    method: 'post',
    body: fd,
  };
  fetch('./image', settings).then((response) => {
    return response.json();
  }).then(() => {
    // update list
    getData();
    frm.reset();
  });
};


frm.addEventListener('submit', sendForm);


// Deleting of images
const deleteImage = (id) => {
  const settings = {
    method: 'DELETE',
  };
  fetch('./del/' + id, settings).then(response => {
    return response.json();
  }).then(() => {
    // update list
    getData();
  });
};


let originalData = null; // for displaying selected category
// category chooser 

document.querySelector('#reset-button').addEventListener('click', () => {
  updateView(originalData);
});

// Create buttons for categories
const categoryButtons = (items, req) => {
  items = removeDuplicates(items, 'ID');
  document.querySelector('#categories').innerHTML = '';
// loop for creating buttons
  for (let item of items) {
    const button = document.createElement('button');
    button.class = 'btn btn-secondary';
    const selectorValue = document.getElementById('cat');
// loop for pairing category-list to respective itemID.
    let opts = [];
    for (let i = 0; i < selectorValue.options.length; i++) {
      opts.push(selectorValue.options[i].text);
    }
// For adjusting index 0-3 to itemID 1-4
    button.innerText = selectorValue.options[item.ID - 1].text;

    document.querySelector('#categories').appendChild(button);
    button.addEventListener('click', () => {
      sortItems(originalData, item.ID);

    });
  }
};
// hiding modal
const modalbutton = document.querySelector('.modal button');
if (modalbutton) {
  modalbutton.addEventListener('click', (evt) => {
    evt.target.parentNode.classList.add('hidden');

  });
}// Sorting items
const sortItems = (items, rule) => {
  const newItems = items.filter(item => item.ID === rule);
  // console.log(newItems);
  updateView(newItems);
};

const removeDuplicates = (myArr, prop) => {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
};

// create content to article. (div, image, h3, 3 buttons)
const createArticle = (image, title, texts, id, likes) => {
  let text = '';
  for (let t of texts) {
    text += `<p class="card-para">${t}</p>`;
  }

  return `<div id="article-container"><img src="${image}" alt="${title}" class="card-class">
                <h3 class="card-title">${title}</h3>
		<div class="like-container"><p class ="like"> <img src="CSS/images/like.png" id="like-button">${likes}</p>
		</div>
                ${text}
                <p class="button-container"><button class="view">View</button>
                <button class="update">Like</button>
                <button class="delete" onclick="deleteImage(${id})">Delete</button></p></div>`;
};
// Fetch items and show on the web page
const getData = () => {
  fetch('./all').then(response => {
    return response.json();
  }).then(items => {
    originalData = items;
    // 3. update view
// Send items to updateView function
    updateView(items);
  });

};
// **************************

// Updates view, creates articles to show items
const updateView = (items) => {
  categoryButtons(items);
  document.querySelector('main').innerHTML = '';
// create articles
  for (let item of items) {
    // console.log(item);
    const article = document.createElement('article');
    const time = moment(item.time);
    // call createArticle to add html content to article
    article.innerHTML = createArticle(item.Thumbnail, item.Title, [
      '<small>' + time.format('dddd, MMMM Do YYYY, HH:mm') + '</small>',
      item.Description], item.FileID, item.Likes);
    article.querySelector('.view').addEventListener('click', () => {
      // open modal and populate
// show modal, add source and title
      document.querySelector('.modal').classList.remove('hidden');
      document.querySelector('.modal img').src = item.Image;
      document.querySelector('.modal h4').innerHTML = item.Title;
    });

    // when update button is clicked populate updateform
    article.querySelector('.update').
        addEventListener('click', () => {
          //fillUpdate(item);
          doLike(item)
	getData();
        });


// add article to view
    document.querySelector('main').appendChild(article);
  }
};

//Function for liking pictures. Sends Likes and FiledID from the selected image to backend
const doLike = (image) => {
  const data = JSON.stringify({
    Likes: image.Likes,
    FileID: image.FileID,
  });
  const settings = {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
  fetch('./like', settings).then((response) => {
    return response.json();
  }).then((json) => {
  });
};




// Update user view
getData();

const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

//Form opening (show or hide)
const openRegisterForm = () => {
// show or hide form depending on visibility
  if (loginForm.style.display === 'block') {
    loginForm.style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
  } else {
    document.getElementById('register-form').style.display = 'block';
  }
};

const closeRegisterForm = () => {
  document.getElementById('register-form').style.display = 'none';
};

const openLoginForm = () => {
  if (registerForm.style.display === 'block') {
    registerForm.style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  } else {
    document.getElementById('login-form').style.display = 'block';
  }
};

const closeLoginForm = () => {
  document.getElementById('login-form').style.display = 'none';
};
//**********************************

//User Registration ***********************
const register = (evt) => {

  let password = document.getElementById('password').value;
  let confirm_password = document.getElementById('confpwd').value;
  const validPasswordString = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  const errors = [];

  if (password !== confirm_password) {
    errors.push('Passwords dont match');
  }

  if (password.match(validPasswordString)) {
  } else {
    errors.push(
        'password must be at least 6 characters and must contain 1 capital & 1 number');
  }
  if (errors.length > 0) {
    evt.preventDefault();
    alert(errors);
    errors.length = 0;
  } else {

    const data = JSON.stringify({
      Username: registerForm.querySelector('input[name="username"]').value,
      Email: registerForm.querySelector('input[name="email"]').value,
      Password: registerForm.querySelector('input[name="password"]').value,
    });
    const settings = {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
    fetch('./register', settings).then((response) => {
      return response.json();
    }).then((json) => {
    });
  }
};

registerForm.addEventListener('submit', register);

//User Login ************************
const login = (evt) => {
// prevent form send
  evt.preventDefault();
// get data from register form
  const data = JSON.stringify({
    username: loginForm.querySelector('input[name="username"]').value,
    password: loginForm.querySelector('input[name="password"]').value,
  });
  const settings = {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
// get user information from backend
  fetch('./login', settings).then((response) => {
    return response.json();
  }).then((json) => {
     showHide(json);
  });
};
loginForm.addEventListener('submit', login);

// ***************************

//Show Elements when user logs in *******************
const showHide = (user) => {
  //show and hide elements when user logs in
  document.getElementById('SignUp').style.display = 'none';
  document.getElementById('login').style.display = 'none';
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('fcont').style.display = 'block';
  document.getElementById('logOut').style.display = 'block';
  //TODO Show username that has logged, in the top bar
  const label = document.getElementById('logged-label');
  const userElement = document.getElementById('username-here');
// insert username to userElement on header and show it
  userElement.innerHTML = user.Username;
  userElement.style.display = 'block';
};

// logout user and redirect window
const logOutt = () => {

  fetch('logout', {
    method: 'get',
    credentials: 'include'

  }).then((response) => {
    if (response.redirected) {
      return window.location.replace(response.url);
    }

  }).catch(function(err) {
    console.log(err);
  });
};
