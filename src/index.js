/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
// eslint-disable-next-line no-unused-vars
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

const list = document.querySelector('.placeholder');
const unList = document.createElement('div');
unList.classList.add('container');
list.appendChild(unList);
const title = document.createElement('h1');
title.textContent = "Today's To Do";
title.classList.add('title');
const refresh = document.createElement('img');
refresh.classList.add('input-icon');
refresh.src = Refresh;
title.appendChild(refresh);
unList.appendChild(title);
const addList = document.createElement('input');
addList.setAttribute('type', 'text');
addList.placeholder = 'Add to your list...';
addList.classList.add('add-list');
unList.appendChild(addList);

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
    unList.appendChild(row);
  }
  const footer = document.createElement('div');
  footer.classList.add('footer');
  const footerBtn = document.createElement('button');
  footerBtn.setAttribute('type', 'button');
  footerBtn.classList.add('footer-btn');
  footerBtn.textContent = 'Clear All Completed';
  footer.appendChild(footerBtn);
  unList.appendChild(footer);
}

display();
