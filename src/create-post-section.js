import { createPost, stackUlEl } from './feed.js';
import { selectedUser } from './header-section.js';

// function creatForm() {
const createPostSectionForm = document.createElement('form');
createPostSectionForm.setAttribute('id', 'create-post-form');
createPostSectionForm.setAttribute('autocomplete', 'off');

const formH2El = document.createElement('h2');
formH2El.innerText = 'Create a post';

const formLabelForImgEl = document.createElement('label');
formLabelForImgEl.innerText = 'Image';
formLabelForImgEl.setAttribute('for', 'image');

const formInputForImgEl = document.createElement('input');
formInputForImgEl.setAttribute('id', 'image');
formInputForImgEl.setAttribute('name', 'image');
formInputForImgEl.setAttribute('type', 'text');
formInputForImgEl.setAttribute('required', true);

const formLabelForTitleEl = document.createElement('label');
formLabelForTitleEl.innerText = 'Title';

const formInputForTitleEl = document.createElement('input');
formInputForTitleEl.setAttribute('id', 'title');
formInputForTitleEl.setAttribute('name', 'title');
formInputForTitleEl.setAttribute('type', 'text');
formInputForTitleEl.setAttribute('required', true);

const formLabelForContentEl = document.createElement('label');
formLabelForContentEl.innerText = 'Content';

const formContentTextareaEl = document.createElement('textarea');
formContentTextareaEl.setAttribute('id', 'content');
formContentTextareaEl.setAttribute('name', 'content');
formContentTextareaEl.setAttribute('rows', '2');
formContentTextareaEl.setAttribute('columns', '3o');
formContentTextareaEl.setAttribute('required', true);

// div section

const formDivSectionEl = document.createElement('div');
formDivSectionEl.setAttribute('class', 'action-btns');

const formDivSectionBtnEl = document.createElement('button');
formDivSectionBtnEl.setAttribute('id', 'preview-btn');
formDivSectionBtnEl.setAttribute('type', 'button');
formDivSectionBtnEl.innerText = 'Preview';

const formDivSectionBtnSubmitEl = document.createElement('button');
formDivSectionBtnSubmitEl.setAttribute('type', 'submit');
formDivSectionBtnSubmitEl.innerText = 'Post';

formDivSectionEl.append(formDivSectionBtnEl, formDivSectionBtnSubmitEl);
createPostSectionForm.append(
  formH2El,
  formLabelForImgEl,
  formInputForImgEl,
  formLabelForTitleEl,
  formInputForTitleEl,
  formLabelForContentEl,
  formContentTextareaEl,
  formDivSectionEl
);

// return createPostSectionForm;
// }

// const myForm = creatForm();

createPostSectionForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const content = {
    title: formInputForTitleEl.value,
    content: formContentTextareaEl.value,
    image: {
      src: formInputForImgEl.value,
      alt: '',
      userId: selectedUser,
    },
  };

  fetch('http://localhost:3000/posts', {
    method: 'POST',

    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(content),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      stackUlEl.append(createPost(data));
    });
});
export { createPostSectionForm };
