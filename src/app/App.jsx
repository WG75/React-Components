import React from 'react';
import ReactDOM from 'react-dom';
import './theme/core.scss';
import Selectbox from './containers/Selectbox/Selectbox';

const options = [{
	label: 'id1',
	value: 'Value 1'
}, {
	label: 'id2',
	value: 'Value 2'
}, {
	label: 'id3',
	value: 'Value 3'
}];



ReactDOM.render((
	<Selectbox {...{options, defaultValue: 'Value 2' ,onChange: (option) => {console.log(option)}}}/>
), document.getElementById('root'));
