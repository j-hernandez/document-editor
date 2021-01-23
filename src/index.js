// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import store from './store';
import {
  addDocument,
  updateDocument,
  deleteDocument,
  setSelected,
  setSearch
} from './actions';

window.store = store;
window.addDocument = addDocument;
window.updateDocument = updateDocument;
window.deleteDocument = deleteDocument;
window.setSelected = setSelected;
window.setSearch = setSearch;