import React from 'react';
import ReactDOM from 'react-dom';
import './theme/core.scss';
import {ProductItem} from './containers/ProductItem/ProductItem.jsx';

const prodProps = {
    category: 'Optional category',
    title: 'product name',
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







//test image containers

const items = [
                {
                  image: '/dist/test1.jpg',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                  image: '/dist/test2.jpg',
                  description: 'not enough text about the product description'
                },
                {
                  image: '/dist/test3.jpg',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
                ]

const ListOfProducts = ({items, description}) => (
  <div>
    {items.map((item => {
      return <ProductItem {...prodProps} img={item.image}  description={item.description}/>
    }))}
  </div>
);


ReactDOM.render(<ListOfProducts items={items} />, document.getElementById('root'));
