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

const formLabelForTitleEl = document.createElement('label');
formLabelForTitleEl.innerText = 'Title';

const formInputForTitleEl = document.createElement('input');
formInputForTitleEl.setAttribute('id', 'title');
formInputForTitleEl.setAttribute('name', 'title');
formInputForTitleEl.setAttribute('type', 'text');

const formLabelForContentEl = document.createElement('label');
formLabelForContentEl.innerText = 'Content';

const formContentTextareaEl = document.createElement('textarea');
formContentTextareaEl.setAttribute('id', 'content');
formContentTextareaEl.setAttribute('name', 'content');
formContentTextareaEl.setAttribute('rows', '2');
formContentTextareaEl.setAttribute('columns', '3o');

// div section

const formDivSectionEl = document.createElement('div');
formDivSectionEl.setAttribute('class', 'action-btns');

const formDivSectionBtnEl = document.createElement('button');
formDivSectionBtnEl.setAttribute('id', 'preview-btn');
formDivSectionBtnEl.setAttribute('type', 'button');
formDivSectionBtnEl.innerText = 'Preview';

const formDivSectionBtnSubmitEl = document.createElement('button');
formDivSectionBtnSubmitEl.setAttribute('type', 'button');
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

export { createPostSectionForm };
// <form id='create-post-form' autocomplete='off'>
//   <h2>Create a post</h2>
//   <label for='image'>Image</label>
//   <input id='image' name='image' type='text' />
//   <label for='title'>Title</label>
//   <input id='title' name='title' type='text' />
//   <label for='content'>Content</label>
//   <textarea id='content' name='content' rows='2' columns='30'></textarea>
//   <div class='action-btns'>
//     <button id='preview-btn' type='button'>
//       Preview
//     </button>
//     <button type='submit'>Post</button>
//   </div>
// </form>
