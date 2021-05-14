import { state } from './index.js';
import { createUserChip } from './createUserchip.js';

function createUserChipsAndAppendToWrapper(users) {
  for (const user of users) {
    const chipEl = createUserChip(user);

    chipEl.addEventListener('click', function () {
      state.currentUser = user;

      const currentChipEl = document.querySelector('.active');
      if (currentChipEl !== null) {
        currentChipEl.classList.remove('active');
      }

      chipEl.classList.add('active');
    });

    const wrapperEl = document.querySelector('.header.wrapper');
    wrapperEl.append(chipEl);
  }
}

export { createUserChipsAndAppendToWrapper };
