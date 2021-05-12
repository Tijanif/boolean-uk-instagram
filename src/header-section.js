/* ------------- HEADER SECTION HTML JS ------------- */
const headerDivWraperEl = document.createElement('div');
headerDivWraperEl.setAttribute('class', 'wrapper');

function creatingChip() {
  const chipActiveDivEl = document.createElement('div');
  chipActiveDivEl.setAttribute('class', 'chip active');
  headerDivWraperEl.append(chipActiveDivEl);
  return chipActiveDivEl;
}
const chipActiveDivEl = creatingChip();

const avatarSmallDivEl = document.createElement('div');
avatarSmallDivEl.setAttribute('class', 'avatar-small');
chipActiveDivEl.append(avatarSmallDivEl);

const avatarSmallImgEl = document.createElement('img');
avatarSmallImgEl.src =
  'https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg';

avatarSmallImgEl.setAttribute('alt', 'Salvador Dali');
avatarSmallDivEl.append(avatarSmallImgEl);

const chipSpanEl = document.createElement('span');
chipSpanEl.innerText = 'Salvador Dali';
chipActiveDivEl.append(chipSpanEl);

export { headerDivWraperEl };
