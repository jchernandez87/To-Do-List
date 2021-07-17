/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import _ from 'lodash';
import './style.css';
import { addTask, addBtn } from './modules/addTask.js';
// import { display } from './modules/addTask.js';
addBtn.addEventListener('click', addTask);
