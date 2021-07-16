/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import { updateData, updateArr } from './localStorage.js';

let srcElement = null;

const drag = (item) => {
  item.addEventListener('dragstart', (e) => {
    srcElement = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', item.innerHTML);
    item.classList.add('dragging');
  });

  item.addEventListener('dragend', () => {
    item.classList.remove('dragging');
  });

  item.addEventListener('dragenter', () => {
    item.classList.add('over');
  });

  item.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  item.addEventListener('dragleave', () => {
    item.classList.remove('over');
  });

  item.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (srcElement !== item) {
      srcElement.innerHTML = item.innerHTML;
      item.innerHTML = e.dataTransfer.getData('text/html');
    }
    item.classList.remove('over');
    updateData();
    return false;
  });
};

function log() {
  console.log(updateArr());
}

export {
  drag, log,
};
