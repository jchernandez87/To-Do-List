/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import _ from 'lodash';
import {
  drag, log, myArr, getData,
} from './modules/drag.js';
import './style.css';
import Icon from './assets/dots.svg';

log();

const newArr = getData();

const placeholder = document.querySelector('.placeholder');

function display() {
  for (let i = 0; i < myArr.length; i++) {
    const row = document.createElement('div');
    row.setAttribute('data-id', i);
    row.classList.add('row');
    row.setAttribute('draggable', true);

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

    const icon = document.createElement('span');
    icon.style.backgroundImage = `url(${Icon})`;
    icon.classList.add('row-icon');
    row.appendChild(icon);
    placeholder.appendChild(row);

    drag(row);
  }
}

console.log(newArr);

window.addEventListener('load', display);
