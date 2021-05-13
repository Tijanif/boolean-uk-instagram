const stackUlEl = document.createElement('ul');
stackUlEl.setAttribute('class', 'stack');

const postLiEl = document.createElement('li');
postLiEl.setAttribute('class', 'post');
stackUlEl.append(postLiEl);

const chipActiveEl = document.createElement('div');
chipActiveEl.setAttribute('class', 'chip active');

const avatarSmallEl = document.createElement('div');
avatarSmallEl.setAttribute('class', 'avatar-small');

const imgEl = document.createElement('img');
imgEl.setAttribute('alt', 'Salvador Dali');
imgEl.src =
  'https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg';
avatarSmallEl.append(imgEl);

const spanEl = document.createElement('span');
spanEl.innerText = 'Salvador Dali';
chipActiveEl.append(avatarSmallEl, spanEl);

const postImgDivEl = document.createElement('div');
postImgDivEl.setAttribute('class', 'post--image');

const postImageEl = document.createElement('img');
postImageEl.src =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU';
postImgDivEl.append(postImageEl);

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

const postCommentDivEl = document.createElement('div');
postCommentDivEl.setAttribute('class', 'post--comment');

const avatarEl = document.createElement('div');
avatarEl.setAttribute('class', 'avatar-small');

const commentAvatarImgEl = document.createElement('img');
commentAvatarImgEl.src =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU';
avatarEl.append(commentAvatarImgEl);

const commentParaEl = document.createElement('p');
commentParaEl.innerText = 'What a great photo!!';

postCommentDivEl.append(avatarEl, commentParaEl);

// Form

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

postCommentsEl.append(h3CommentsEl, postCommentDivEl);
postLiEl.append(
  chipActiveEl,
  postImgDivEl,
  postContentEl,
  postCommentsEl,
  formEl
);

export { stackUlEl };
