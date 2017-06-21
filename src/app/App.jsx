import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './containers/Dashboard/Dashboard';
import DataDashboard from './data/Dashboard';
import './theme/core.scss';

ReactDOM.render((
    <div>
		<Dashboard list={DataDashboard} backgroundColor="#7d91a5" />
	</div>
), document.getElementById('root'));
