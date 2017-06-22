import React from 'react';
import PropTypes from 'prop-types';
import styles from './productitem.scss';

export const CProdCategory = ({category}) => (
    <h3 className={styles.category}>{category}</h3>
);

CProdCategory.PropTypes = {
    category: PropTypes.string.isRequired
};

export const CProdImage = ({img}) => (
    <div className={styles.imageContainer}>
        <img src={img} alt="product item image"/>
    </div>
);

CProdImage.PropTypes = {
    img: PropTypes.string.isRequired
};

export const CProdName = ({title}) => (
    <h2>{title}</h2>
);

CProdName.PropTypes = {
    name: PropTypes.string.isRequired
};

export const CProdDescription = ({description}) => (
    <p>{description}</p>
);

CProdDescription.PropTypes = {
    description: PropTypes.string.isRequired
};

export const CTileItem = ({title, value}) => (
    <li>
        <span>{title}</span>
        <span>{value}</span>
    </li>
);

CTileItem.PropTypes = {
    feature: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired
};

export const CTileList = ({items}) => (
	<CList>
        {items.map((item, key) => (<CTileItem key={key} {...item}/>))}
    </CList>
);

CTileList.PropTypes = {
    items: PropTypes.array.isRequired
};

export const CList = ({children}) => (
    <div className={styles.tileList}>
        <ul>
            {children}
        </ul>
    </div>
);

export const CProductItem = ({children}) => (
    <div className={styles.prodItemWrapper}>
        {children}
    </div>
);
