import { createFeedSection } from './createfeedSection.js';
import { rootEl } from './index.js';

function createMainSection() {
  const mainEl = document.createElement('main');
  mainEl.setAttribute('class', 'wrapper');

  const postSectionEl = document.createElement('section');
  postSectionEl.setAttribute('class', 'create-post-section');

  const feedSectionEl = createFeedSection();

  mainEl.append(postSectionEl, feedSectionEl);
  rootEl.append(mainEl);
}
export { createMainSection };
