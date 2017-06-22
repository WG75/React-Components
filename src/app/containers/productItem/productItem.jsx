import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    CProductItem,
    CProdCategory,
    CProdImage,
    CProdName,
    CProdDescription,
    CTileList
} from './c/CProductItem.jsx';

export class ProductItem extends Component {

    static PropTypes = {
        category: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    }

    render() {

        const {category, img, title, description, items} = this.props;

        return (
            <CProductItem>
                <CProdCategory category={category}/>
                <CProdImage img={img}/>
                <CProdName title={title}/>
                <CProdDescription description={description}/>
                <CTileList items={items}/>
            </CProductItem>
        );
    }
}
