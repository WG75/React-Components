import React from 'react';
import ReactDOM from 'react-dom';
import Selectbox from './containers/Selectbox/c/Selectbox';
import CSelectBoxes from './containers/Selectbox/CSelectBoxes.jsx'
import options from './data/options.js'


ReactDOM.render((<Selectbox options={options[0]}/>), document.getElementById('root'));
