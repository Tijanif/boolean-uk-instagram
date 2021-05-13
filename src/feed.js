let users = [];
let posts = [];
function getUsersFromServer() {
  fetch('http://localhost:3000/users')
    .then(function (response) {
      return response.json();
    })
    .then(function (usersFromServer) {
      users = usersFromServer;
    });
}

function getPostsFromServer() {
  fetch('http://localhost:3000/posts')
    .then(function (response) {
      return response.json();
    })
    .then(function (postsFromServer) {
      posts = postsFromServer;
      createFeed(posts);
    });
}

//ul
const stackUlEl = document.createElement('ul');
stackUlEl.setAttribute('class', 'stack');

function createFeed(posts) {
  for (const post of posts) {
    createPost(post);
  }
}

function createPost(post) {
  let user = users.find(function (user) {
    return user.id === post.userId;
  });

  //l1
  const postLiEl = document.createElement('li');
  postLiEl.setAttribute('class', 'post');
  stackUlEl.append(postLiEl);
  //div chip class
  const chipActiveEl = document.createElement('div');
  chipActiveEl.setAttribute('class', 'chip active');
  //avatar
  const avatarSmallEl = document.createElement('div');
  avatarSmallEl.setAttribute('class', 'avatar-small');
  //img
  const imgEl = document.createElement('img');
  imgEl.setAttribute('alt', user.username);
  imgEl.src = user.avatar;
  avatarSmallEl.append(imgEl);
  //span
  const spanEl = document.createElement('span');
  spanEl.innerText = user.username;
  chipActiveEl.append(avatarSmallEl, spanEl);

  for (const post of posts) {
  }
  //post-mage
  const postImgDivEl = document.createElement('div');
  postImgDivEl.setAttribute('class', 'post--image');

  const postImageEl = document.createElement('img');
  postImageEl.src = post.image.src;
  postImgDivEl.append(postImageEl);

  //post content class
  const postContentEl = document.createElement('div');
  postContentEl.setAttribute('class', 'post--content');

  const contentTitelEl = document.createElement('h2');
  contentTitelEl.innerText = 'A tree in blossom';

  const contentParagraphEl = document.createElement('p');
  contentParagraphEl.innerText =
    'Spring is finally here... I just love the colours.';

  postContentEl.append(contentTitelEl, contentParagraphEl);

  const postCommentsEl = document.createElement('div');
  postCommentsEl.setAttribute('class', 'post--comments');

  const h3CommentsEl = document.createElement('h3');
  h3CommentsEl.innerText = 'Comments';
  postCommentsEl.append(h3CommentsEl);

  for (const comment of post.comments) {
    //comment
    let user = users.find(function (user) {
      return user.id === comment.userId;
    });
    const postCommentDivEl = document.createElement('div');
    postCommentDivEl.setAttribute('class', 'post--comment');

    const avatarEl = document.createElement('div');
    avatarEl.setAttribute('class', 'avatar-small');

    const commentAvatarImgEl = document.createElement('img');
    commentAvatarImgEl.src = user.avatar;
    avatarEl.append(commentAvatarImgEl);

    const commentParaEl = document.createElement('p');
    commentParaEl.innerText = comment.content;
    postCommentDivEl.append(avatarEl, commentParaEl);
    postCommentsEl.append(postCommentDivEl);
    //end
  }

  postLiEl.append(chipActiveEl, postImgDivEl, postContentEl, postCommentsEl);

  //form
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
  postLiEl.append(formEl);
}

getUsersFromServer();
getPostsFromServer();

export { stackUlEl, createPost };
