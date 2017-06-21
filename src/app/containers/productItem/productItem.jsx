import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    CproductItem,
    ProdCategory,
    ProdImage,
    ProdName,
    ProdDescription,
    TileList
} from './c/cProductItem.jsx';

export class ProductItem extends Component {

    static PropTypes = {
        category: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    }

    render() {

        const {category, img, name, description, items} = this.props;

        return (
            <CproductItem>
                <ProdCategory category={category}/>
                <ProdImage img={img}/>
                <ProdName name={name}/>
                <ProdDescription description={description}/>
                <TileList items={items}/>
            </CproductItem>
        );
    }
}
