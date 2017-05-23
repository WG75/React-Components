import React from 'react';
import ReactDOM from 'react-dom';
import CDashboard from './scripts/CDashboard';
import styles from './App.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CDashboard />, document.getElementById('root'));
registerServiceWorker();
