import React from 'react';
import PropTypes from 'prop-types';
import styles from './productitem.scss';

export const ProdCategory = ({category}) => (
    <h3 className={styles.category}>{category}</h3>
);

ProdCategory.PropTypes = {
    category: PropTypes.string.isRequired
};

export const ProdImage = ({img}) => (
    <div className={styles.imageContainer}>
        <img src={img} alt="product item image"/>
    </div>
);

ProdImage.PropTypes = {
    img: PropTypes.string.isRequired
};

export const ProdName = ({name}) => (
    <h2>{name}</h2>
);

ProdName.PropTypes = {
    name: PropTypes.string.isRequired
};

export const ProdDescription = ({description}) => (
    <p>{description}</p>
);

ProdDescription.PropTypes = {
    description: PropTypes.string.isRequired
};

export const TileItem = ({feature, degree}) => (
    <li>
        <span>{feature}</span>
        <h1>{degree}</h1>
    </li>
);

TileItem.PropTypes = {
    feature: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired
};

export const TileList = ({items}) => (
    <List>
        {items.map(item => (<TileItem key={item} feature={item.feature} degree={item.degree}/>))}
    </List>
);

TileList.PropTypes = {
    items: PropTypes.array.isRequired
};

export const List = ({children}) => (
    <div className={styles.tileList}>
        <ul>
            {children}
        </ul>
    </div>
);

export const CproductItem = ({children}) => (
    <div className={styles.prodItemWrapper}>
        {children}
    </div>
);
