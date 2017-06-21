import React from 'react';
import ReactDOM from 'react-dom';
import './theme/core.scss';
import {ProductItem} from './containers/productItem/productItem.jsx';

const prodProps = {
    category: 'optional category',
    name: 'product name',
    img: '/dist/metering-product-dummy-01.jpg',
    description: 'some text about the product item',
    items: [
        {
            feature: 'namefeature',
            degree: 'quality'
        }
    ]
};

ReactDOM.render(<ProductItem {...prodProps}/>, document.getElementById('root'));
