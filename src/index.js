import { mainHeader, mainWraper } from './root.js';
import { headerDivWraperEl, creatingMultipleChips } from './header-section.js';
import { mainSectionPostEl, mainSectionClassFeedEl } from './main-section.js';

/* ------------- MAIN ROOT ------------- */
const mainRootDiv = document.querySelector('#root');

function getUsers() {
  return fetch('http://localhost:3000/users').then(function (response) {
    return response.json();
  });
}

getUsers().then(function (users) {
  creatingMultipleChips(users);
});

// console.log(mainHeader, mainWraper);
mainHeader.append(headerDivWraperEl);
mainWraper.append(mainSectionPostEl, mainSectionClassFeedEl);
mainRootDiv.append(mainHeader, mainWraper);

console.log(mainRootDiv);
