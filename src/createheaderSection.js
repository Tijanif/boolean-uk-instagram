import { rootEl } from './index.js';

function createHeaderSection() {
  const headerEl = document.createElement('header');
  headerEl.setAttribute('class', 'main-header');

  const wrapperEl = document.createElement('div');
  wrapperEl.setAttribute('class', 'header wrapper');

  headerEl.append(wrapperEl);
  rootEl.append(headerEl);
}

export { createHeaderSection };
