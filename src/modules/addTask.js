/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import { drag } from './drag.js';
import Trash from '../assets/trash.svg';
import Icon from '../assets/dots.svg';
import {
  updateData, getData, list,
} from './localStorage.js';
import { checkClick } from './tasks.js';

const placeholder = document.querySelector('.placeholder');
const input = document.querySelector('.add-list');
const addBtn = document.querySelector('.add-btn');
const clearBtn = document.querySelector('.footer-btn');

const newArr = getData();

let count = 0;

function addTask(e) {
  e.preventDefault();
  const row = document.createElement('div');
  row.setAttribute('data-id', count);
  row.classList.add('row');
  row.setAttribute('draggable', true);

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  row.appendChild(textContainer);

  const checkBox = document.createElement('input');
  checkBox.classList.add('checkBox');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('data-task', count);
  textContainer.appendChild(checkBox);

  const text = document.createElement('span');
  text.textContent = input.value;
  text.classList.add('text');
  textContainer.appendChild(text);

  const iconCont = document.createElement('div');
  iconCont.classList.add('icon-cont');
  row.appendChild(iconCont);

  const deleteBtn = document.createElement('span');
  deleteBtn.style.backgroundImage = `url(${Trash})`;
  deleteBtn.classList.add('del-btn');
  deleteBtn.setAttribute('type', 'button');
  iconCont.appendChild(deleteBtn);

  const icon = document.createElement('span');
  icon.style.backgroundImage = `url(${Icon})`;
  icon.classList.add('row-icon');
  iconCont.appendChild(icon);
  placeholder.appendChild(row);
  updateData();
  drag(row);
  input.value = '';
  count++;
  window.location.reload();
}

function display() {
  for (let i = 0; i < newArr.length; i++) {
    const row = document.createElement('div');
    row.setAttribute('data-id', i);
    row.classList.add('row');
    row.setAttribute('draggable', true);

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    row.appendChild(textContainer);

    const checkBox = document.createElement('input');
    checkBox.classList.add('checkBox');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('data-task', i);
    textContainer.appendChild(checkBox);

    const text = document.createElement('span');
    text.textContent = newArr[i].description;
    text.classList.add('text');
    textContainer.appendChild(text);

    const iconCont = document.createElement('div');
    iconCont.classList.add('icon-cont');
    row.appendChild(iconCont);

    const deleteBtn = document.createElement('span');
    deleteBtn.style.backgroundImage = `url(${Trash})`;
    deleteBtn.classList.add('del-btn');
    deleteBtn.setAttribute('type', 'button');
    iconCont.appendChild(deleteBtn);

    const icon = document.createElement('span');
    icon.style.backgroundImage = `url(${Icon})`;
    icon.classList.add('row-icon');
    iconCont.appendChild(icon);
    placeholder.appendChild(row);
    drag(row);
  }
}

const removeTask = (e) => {
  const element = e.target;
  if (element.classList[0] === 'del-btn') {
    element.parentElement.parentElement.remove();
  }
  updateData();
};

const clearAll = () => {
  const testArr = Array.from(list);
  const filterArr = testArr.filter((item) => item.classList.contains('completed'));
  filterArr.forEach((item) => item.remove());
  updateData();
};

clearBtn.addEventListener('click', clearAll);
placeholder.addEventListener('click', removeTask);
window.addEventListener('DOMContentLoaded', display);
window.addEventListener('load', checkClick);

export { addTask, addBtn, display };
