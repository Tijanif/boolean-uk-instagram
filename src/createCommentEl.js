import { users } from './index.js';
function createCommentElement(comment) {
  // SINGLE COMMENT START
  const user = users.find(function (user) {
    return user.id === comment.userId;
  });

  const commentEl = document.createElement('div');
  commentEl.setAttribute('class', 'post--comment');

  const avatarEl = document.createElement('div');
  avatarEl.setAttribute('class', 'avatar-small');

  const commentImgEl = document.createElement('img');
  commentImgEl.setAttribute('src', user.avatar);
  commentImgEl.setAttribute('alt', user.username);

  avatarEl.append(commentImgEl);

  const commentTextEl = document.createElement('p');
  commentTextEl.innerText = comment.content;

  commentEl.append(avatarEl, commentTextEl);

  return commentEl;
  // SINGLE COMMENT END
}

export { createCommentElement };
