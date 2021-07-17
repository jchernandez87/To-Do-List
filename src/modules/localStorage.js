/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
import { checkClick, checkInput } from './tasks.js';

const list = document.getElementsByClassName('row');

const getData = () => {
  let dataArr;
  if (localStorage.getItem('tasks') === null) {
    dataArr = [];
  } else {
    dataArr = JSON.parse(localStorage.getItem('tasks'));
  }
  return dataArr;
};

const updateArr = () => {
  const dataArr = [];
  for (let i = 0; i < list.length; i++) {
    dataArr.push({ description: list[i].textContent, completed: false, index: list[i].getAttribute('data-id') });
    if (checkInput[i].nextElementSibling.classList.contains('completed')) {
      dataArr[i].completed = true;
    } else {
      dataArr[i].completed = false;
    }
  }
  return dataArr;
};

const updateData = () => {
  const data = JSON.stringify(updateArr());
  localStorage.setItem('tasks', data);
};

window.addEventListener('load', checkClick);

export {
  updateArr, updateData, getData,
};
