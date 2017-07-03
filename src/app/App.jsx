import React from 'react';
import ReactDOM from 'react-dom';
import './theme/core.scss';
import Selectbox from './containers/Selectbox/c/Selectbox';
import CSelectBoxes from './containers/Selectbox/CSelectBoxes.jsx'
import options from './data/options.js'


ReactDOM.render((<CSelectBoxes SBListOfOptions={options}/>), document.getElementById('root'));
