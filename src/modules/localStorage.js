/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
import { checkInput } from './tasks.js';

const myArr = [
  {
    description: 'Walk the dog 1',
    completed: false,
    index: 0,
  },
  {
    description: 'Walk the dog 2',
    completed: false,
    index: 1,
  },
  {
    description: 'Walk the dog 3',
    completed: false,
    index: 2,
  },
  {
    description: 'Walk the dog 4',
    completed: false,
    index: 3,
  },
  {
    description: 'Walk the dog 5',
    completed: false,
    index: 4,
  },
  {
    description: 'Walk the dog 6',
    completed: false,
    index: 5,
  },
];

const list = document.getElementsByClassName('row');

const testArr = [];

const test = () => {
  for (let i = 0; i < list.length; i++) {
    checkInput[i].addEventListener('click', () => {
      if (checkInput[i].nextElementSibling.classList.contains('completed')) {
        testArr[i].completed = true;
      } else {
        testArr[i].completed = false;
      }
      updateData();
    });
  }
};

window.addEventListener('load', test);

const updateArr = () => {
  for (let i = 0; i < list.length; i++) {
    testArr.push({ description: list[i].textContent, completed: false, index: list[i].getAttribute('data-id') });
  }
};

const saveData = () => {
  let dataArr;
  if (localStorage.getItem('tasks') === null) {
    dataArr = myArr;
  } else {
    dataArr = JSON.parse(localStorage.getItem('tasks'));
  }
  localStorage.setItem('tasks', JSON.stringify(dataArr));
};

const getData = () => {
  let dataObj;
  if (localStorage.getItem('tasks') === null) {
    dataObj = myArr;
  } else {
    const data = localStorage.getItem('tasks');
    dataObj = JSON.parse(data);
  }
  return dataObj;
};

const updateData = () => {
  const data = JSON.stringify(testArr);
  localStorage.setItem('tasks', data);
};

window.addEventListener('load', updateArr);
window.addEventListener('load', saveData);

export {
  saveData, updateData, getData,
};
