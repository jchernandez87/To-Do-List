/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
import { checkInput } from './tasks.js';

const list = document.getElementsByClassName('row');

const updateArr = () => {
  const dataArr = [];
  for (let i = 0; i < list.length; i++) {
    dataArr.push({ description: list[i].textContent, completed: false, index: list[i].getAttribute('data-id') });
    if (checkInput[i].parentElement.classList.contains('completed')) {
      dataArr[i].completed = true;
    } else {
      dataArr[i].completed = false;
    }
    console.log(checkInput[i].parentNode);
  }
  return dataArr;
};

window.addEventListener('load', updateArr);

const updateData = () => {
  const data = JSON.stringify(updateArr());
  localStorage.setItem('tasks', data);
};

const getData = () => {
  let dataArr;
  if (localStorage.getItem('tasks') === null) {
    dataArr = [];
  } else {
    dataArr = JSON.parse(localStorage.getItem('tasks'));
  }
  return dataArr;
};

const saveData = (data) => {
  const dataArr = getData();
  dataArr.push(data);
  localStorage.setItem('data', JSON.stringify(dataArr));
};

export {
  updateArr, saveData, updateData, getData, list,
};
