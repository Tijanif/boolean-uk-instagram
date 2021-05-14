import { users, state } from './index.js';
import { createUserChip } from './createUserchip.js';
import { createCommentElement } from './createCommentEl.js';

function createPost(post) {
  const liEl = document.createElement('li');
  liEl.setAttribute('class', 'post');

  const user = users.find(function (user) {
    return user.id === post.userId;
  });

  const chipEl = createUserChip(user);

  // POST IMAGE SECTION
  const postImgEl = document.createElement('div');
  postImgEl.setAttribute('class', 'post--image');

  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', post.image.src);
  imgEl.setAttribute('alt', post.image.alt);

  postImgEl.append(imgEl);

  // POST CONTENT SECTION
  const postContentEl = document.createElement('div');
  postContentEl.setAttribute('class', 'post--content');

  const h2El = document.createElement('h2');
  h2El.innerText = post.title;

  const pEl = document.createElement('p');
  pEl.innerText = post.content;

  postContentEl.append(h2El, pEl);

  // POST COMMENTS SECTION
  const postCommentsEl = document.createElement('div');
  postCommentsEl.setAttribute('class', 'post--comments');

  const h3El = document.createElement('h3');
  h3El.innerText = 'Comments';

  postCommentsEl.append(h3El);

  for (const comment of post.comments) {
    const commentEl = createCommentElement(comment);
    postCommentsEl.append(commentEl);
    // SINGLE COMMENT END
  }

  // CREATE COMMENT FORM SECTION
  const formEl = document.createElement('form');
  formEl.setAttribute('id', 'create-comment-form');
  formEl.setAttribute('autocomplete', 'off');

  const commentLabelEl = document.createElement('label');
  commentLabelEl.setAttribute('for', 'comment');
  commentLabelEl.innerText = 'Add comment';

  const commentInputEl = document.createElement('input');
  commentInputEl.setAttribute('id', 'comment');
  commentInputEl.setAttribute('name', 'comment');
  commentInputEl.setAttribute('type', 'text');

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.innerText = 'Comment';

  formEl.append(commentLabelEl, commentInputEl, submitBtn);

  // Add a comment:

  // - listen to post's comment form
  formEl.addEventListener('submit', function (event) {
    // - prevent the form from refreshing the page
    event.preventDefault();

    // if there's an active user
    if (state.currentUser !== null) {
      // - get and store comment data
      const comment = {
        content: formEl.comment.value,
        userId: state.currentUser.id,
        postId: post.id,
      };

      // - send that data to the server
      // Method: POST
      // URL: http://localhost:3000/comments
      // Body: comment
      fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (newCommentFromServer) {
          // - display the comment on the page
          // - find the user this comment belongs to
          // - create and append the comment
          const commentEl = createCommentElement(newCommentFromServer);
          postCommentsEl.append(commentEl);
          formEl.reset();
        });
    } else {
      // no user is active...
      alert('Please select a user first');
    }
  });

  liEl.append(chipEl, postImgEl, postContentEl, postCommentsEl, formEl);

  return liEl;
}

export { createPost };
