/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import _ from 'lodash';
import './style.css';
import Icon from './assets/dots.svg';
import Refresh from './assets/refresh.svg';

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

const placeholder = document.querySelector('.placeholder');

function display() {
  for (let i = 0; i < myArr.length; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    row.appendChild(textContainer);
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    textContainer.appendChild(checkBox);
    const text = document.createElement('span');
    text.textContent = myArr[i].description;
    text.classList.add('text');
    textContainer.appendChild(text);
    const icon = document.createElement('img');
    icon.src = Icon;
    icon.classList.add('row-icon');
    row.appendChild(icon);
    placeholder.appendChild(row);
  }
}

window.addEventListener('load', display);
