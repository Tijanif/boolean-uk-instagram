import { createHeaderSection } from './createheaderSection.js';
import { createMainSection } from './createMainSection.js';
import { createUserChipsAndAppendToWrapper } from './createUserChipToWrapper.js';
/* ------------- MAIN ROOT ------------- */
const rootEl = document.querySelector('#root');

// function getUsers() {
//   return fetch('http://localhost:3000/users').then(function (response) {
//     return response.json();
//   });
// }

// getUsers().then(function (users) {
//   creatingMultipleChips(users);
// });

// // console.log(mainHeader, mainWraper);
// mainHeader.append(headerDivWraperEl);
// mainWraper.append(mainSectionPostEl, mainSectionClassFeedEl);
// mainRootDiv.append(mainHeader, mainWraper);

// 💃🕺 🥙
let state = {
  currentUser: null,
};
let users = [];
let posts = [];

// input: none
// action: get users from server
// output: Promise<users>
// dependencies: none
function getUsersFromServer() {
  return fetch('http://localhost:3000/users').then(function (response) {
    return response.json();
  });
}

// input: nothing
// action: getPostsFromServer
// output: Promise<posts array>
function getPostsFromServer() {
  // GET THE POSTS FROM THE SERVER HERE
  // Method: GET
  // Url: http://localhost:3000/posts
  // Body: Nothing...
  return fetch('http://localhost:3000/posts').then(function (response) {
    return response.json();
  });
}

getUsersFromServer().then(function (usersFromServer) {
  // HERE I CAN GUARANTEE THAT USERS ARE BACK
  users = usersFromServer;
  getPostsFromServer().then(function (postsFromServer) {
    // HERE I CAN GUARANTEE THAT USERS AND POSTS ARE BACK
    posts = postsFromServer;
    createHeaderSection();
    createUserChipsAndAppendToWrapper(users);
    createMainSection();
  });
});

export { rootEl, getUsersFromServer, getPostsFromServer, users, posts, state };
