// import { rootElements } from './root.js';

/* ------------- MAIN ROOT ------------- */
const mainRootDiv = document.querySelector('#root');

mainRootDiv.append(mainHeader, mainWraper);

/* ------------- ROOT HTML JS ------------- */
const mainHeader = document.createElement('header');
mainHeader.setAttribute('class', 'main-header');

const mainWraper = document.createElement('main');
mainWraper.setAttribute('class', 'wraper');
