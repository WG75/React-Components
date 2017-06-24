import React from 'react';
import ReactDOM from 'react-dom';
import './theme/core.scss';
import {ProductItem} from './containers/ProductItem/ProductItem.jsx';
import prodData from './data/ProductItems.js';

const ListOfProducts = ({products}) => (
  <div>
    {products.map((item => {
      return <ProductItem {...item}/>
    }))}
  </div>
);


ReactDOM.render(<ListOfProducts products={prodData} />, document.getElementById('root'));
