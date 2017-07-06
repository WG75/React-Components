import React from 'react';
import ReactDOM from 'react-dom';
import Selectbox from './containers/Selectbox/c/Selectbox';
import CSelectBoxes from './containers/Selectbox/CSelectBoxes.jsx'
// import options from './data/options.js'

const options = [
    [
        {
            value: 'value1',
            label: 'value2'
        },
        {
            value: 'value1',
            label: 'value2'
        },
        {
            value: 'value1',
            label: 'value2'
        }

    ],
    [
        {
            value: 'value2',
            label: 'value2'
        },
        {
            value: 'value1',
            label: 'value2'
        },
        {
            value: 'value1',
            label: 'value2'
        }


    ],
    [
        {
            value: 'value3',
            label: 'value3'
        },
        {
            value: 'value1',
            label: 'value2'
        },
        {
            value: 'value1',
            label: 'value2'
        }


    ],
    [
        {
            value: 'value4',
            label: 'value4'
        },
        {
            value: 'value1',
            label: 'value2'
        },
        {
            value: 'value1',
            label: 'value2'
        }

    ]
]

ReactDOM.render((<CSelectBoxes SBListOfOptions={options}/>), document.getElementById('root'));
