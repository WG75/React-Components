import React from 'react';
import ReactDOM from 'react-dom';
import './theme/core.scss';
import {ProductItem} from './containers/ProductItem/ProductItem.jsx';

const prodProps = {
    category: 'optional category',
    title: 'product name',
    img: '/../_temp/products/metering-product-dummy-01.jpg',
    description: 'some text about the product item',
    items: [
        {
            title: 'namefeature',
            value: 'quality'
        }
    ]
};

ReactDOM.render(<ProductItem {...prodProps}/>, document.getElementById('root'));
