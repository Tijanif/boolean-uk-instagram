import { mainHeader, mainWraper } from './root.js';
import { headerDivWraperEl } from './header-section.js';

/* ------------- MAIN ROOT ------------- */
const mainRootDiv = document.querySelector('#root');

// console.log(mainHeader, mainWraper);
mainHeader.append(headerDivWraperEl);
mainRootDiv.append(mainHeader, mainWraper);

console.log(mainRootDiv);
