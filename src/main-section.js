import { createPostSectionForm } from './create-post-section.js';

const mainSectionPostEl = document.createElement('section');
mainSectionPostEl.setAttribute('class', 'create-post-section');

const mainSectionClassFeedEl = document.createElement('section');
mainSectionClassFeedEl.setAttribute('class', 'feed');

mainSectionPostEl.append(createPostSectionForm);
export { mainSectionPostEl, mainSectionClassFeedEl };
