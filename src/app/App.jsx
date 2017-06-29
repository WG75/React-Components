import React from 'react';
import ReactDOM from 'react-dom';
import './theme/core.scss';
import Selectbox from './containers/Selectbox/Selectbox';

const options = [{
	id: 'id1',
	title: 'Value 1'
}, {
	id: 'id2',
	title: 'Value 2'
}, {
	id: 'id3',
	title: 'Value 3'
}];

ReactDOM.render((
	<Selectbox {...{options, defaultId: options[0].id}} />
), document.getElementById('root'));
