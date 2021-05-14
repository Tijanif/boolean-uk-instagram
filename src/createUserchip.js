import { users } from './index.js';

function createUserChip(user) {
  const chipEl = document.createElement('div');
  chipEl.setAttribute('class', 'chip');

  const avatarEl = document.createElement('div');
  avatarEl.setAttribute('class', 'avatar-small');

  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', user.avatar);
  imgEl.setAttribute('alt', user.username);

  avatarEl.append(imgEl);

  const nameEl = document.createElement('span');
  nameEl.innerText = user.username;

  chipEl.append(avatarEl, nameEl);

  return chipEl;
}

export { createUserChip };
