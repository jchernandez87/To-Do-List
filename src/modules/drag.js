/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
let srcElement = null;

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

const drag = (item) => {
  item.addEventListener('dragstart', (e) => {
    srcElement = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', item.innerHTML);
    item.classList.add('dragging');
  });

  item.addEventListener('dragend', () => {
    item.classList.remove('dragging');
    const id = item.getAttribute('data-id');
    myArr[id].description = item.textContent;
    myArr[id].index = id;
    console.log(myArr);
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
    const id = item.getAttribute('data-id');
    myArr[id].description = item.textContent;
    myArr[id].index = id;
    item.classList.remove('over');
    return false;
  });
};

const saveData = () => {
  const data = JSON.stringify(myArr);
  localStorage.setItem('tasks', data);
  return data;
};

const getData = () => {
  const dataGet = localStorage.getItem('tasks');
  const dataObj = JSON.parse(dataGet);
  return dataObj;
};

function log() {
  console.log(getData);
}

export {
  drag, log, myArr, getData, saveData,
};
