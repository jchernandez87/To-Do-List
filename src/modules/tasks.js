/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
const checkInput = document.getElementsByClassName('checkBox');

const checkClick = () => {
  for (let i = 0; i < checkInput.length; i++) {
    checkInput[i].addEventListener('click', () => {
      checkInput[i].parentElement.classList.toggle('completed');
      checkInput[i].parentElement.parentElement.classList.toggle('completed');
      checkInput[i].toggleAttribute('checked');
    });
  }
};

export { checkClick, checkInput };