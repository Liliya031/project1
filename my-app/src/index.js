import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// window.addEventListener ('load', () => {
//   const form = document.querySelector("#new-task-form");
//   const input = document.querySelector("#new-task-input");
//   const list_el = document.querySelector("#tasks");
//    form.addEventListener ('submit', (e) => {
//       e.preventDefault();
//       const task = input.value
//       if (!task) {
//           alert ("Please fill");
//           return
//       } 
//       const task_el = document.createElement("div");
//       task_el.classList.add("task);
//    })
   
//   })
  
  // const EDIT_BUTTON = document.querySelector('.edit-btn');
  // const STYLE_BUTTON = document.querySelector('.style-btn');
  // const ADD_BUTTON = document.querySelector('.add-btn');
  // const SAVE_BUTTON = document.querySelector('.save-btn');
  // const AREA = document.querySelector('.area');
  // const TOP_BLOCK = document.querySelector('.top-block');
  // const EDIT_BLOCK = document.querySelector('.edit-block');
  // const STYLE_BLOCK = document.querySelector('.style-block');
  
  // EDIT_BUTTON.addEventListener('click', () => {
  //     AREA.value = TOP_BLOCK.innerHTML;
  //     EDIT_BLOCK.classList.add('show');
  //     STYLE_BLOCK.classList.remove('show');
  // })
  
  // SAVE_BUTTON.addEventListener('click', () => {
  //     TOP_BLOCK.innerHTML = AREA.value;
  //     EDIT_BLOCK.classList.remove('show');
  // })
  
  // STYLE_BUTTON.addEventListener('click', () => {
  //     EDIT_BLOCK.classList.remove('show');
  //     STYLE_BLOCK.classList.add('show');
  // })
  
  // const FONT_SIZE_FORM = document.querySelector('.font-size');
  
  // FONT_SIZE_FORM.addEventListener('click', (event) => {
  //     if(event.target.name === 'size') {
  //         TOP_BLOCK.style.fontSize = event.target.value;
  //     }
  // })