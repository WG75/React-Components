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
            title: 'NenngrÖße',
            value: 'Q3 1,6 ... 25 m3/h'
        },
        {
          title: 'Nennweite',
          value: 'DN 15 ... 50 mm'
        },
        {
          title: 'Zulassung',
          value: 'MID R 400'
        },
        {
          title: 'Temperaturbereich',
          value: '5 ... 50C'
        },
        {
          title: 'Schnittstellen',
          value: 'Funk/M-Bus/Puls/L-Bus'
        }
    ]
};

ReactDOM.render(<ProductItem {...prodProps}/>, document.getElementById('root'));
