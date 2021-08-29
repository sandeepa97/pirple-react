import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Clscom} from './Clscom';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App contentdata = "some data from props!" >Some children data from Functional component</ App>, document.getElementById('root'));

ReactDOM.render(<App contentdata = "some data changed from previous props!" />, document.getElementById('data2'));
ReactDOM.render(<Clscom classdata = "some data from class component" newcomponent = "Some new component data!">Data from other children!</Clscom>, document.getElementById('Clscom'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
