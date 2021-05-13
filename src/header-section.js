/* ------------- HEADER SECTION HTML JS ------------- */
const headerDivWraperEl = document.createElement('div');
headerDivWraperEl.setAttribute('class', 'wrapper');

function creatingChip(usersData) {
  const chipActiveDivEl = document.createElement('div');
  chipActiveDivEl.setAttribute('class', 'chip');
  headerDivWraperEl.append(chipActiveDivEl);

  chipActiveDivEl.addEventListener('click', function () {
    chipActiveDivEl.classList.add('active');
  });

  const avatarSmallImgEl = document.createElement('img');
  avatarSmallImgEl.src = usersData.avatar;

  const avatarSmallDivEl = document.createElement('div');
  avatarSmallDivEl.setAttribute('class', 'avatar-small');
  chipActiveDivEl.append(avatarSmallDivEl);

  avatarSmallImgEl.setAttribute('alt', 'Salvador Dali');
  avatarSmallDivEl.append(avatarSmallImgEl);

  const chipSpanEl = document.createElement('span');
  chipSpanEl.innerText = usersData.username;
  chipActiveDivEl.append(chipSpanEl);

  return chipActiveDivEl;
}
function creatingMultipleChips(userData) {
  for (const user of userData) {
    creatingChip(user);
  }
}

// function getUsers() {
//   return fetch('http://localhost:3000/users').then(function (response) {
//     return response.json();
//   });
// }

// getUsers().then(function (users) {
//   creatingMultipleChips(users);
// });
export { headerDivWraperEl, creatingChip, creatingMultipleChips };
