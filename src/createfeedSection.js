import { createPost } from './createPost.js';
import { posts } from './index.js';

function createFeedSection() {
  const feedSectionEl = document.createElement('section');
  feedSectionEl.setAttribute('class', 'feed');

  const ulEl = document.createElement('ul');
  ulEl.setAttribute('class', 'stack');

  for (const post of posts) {
    // create a post element
    const postLiEl = createPost(post);
    ulEl.append(postLiEl);
  }

  feedSectionEl.append(ulEl);
  return feedSectionEl;
}

export { createFeedSection };
