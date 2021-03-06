import React from 'react';
import PropTypes from 'prop-types';
import styles from './productitem.scss';

export const CProdCategory = ({category}) => (
    <h3 className={styles.prodCategory}>{category}</h3>
);

CProdCategory.PropTypes = {
    category: PropTypes.string.isRequired
};

export const CProdImage = ({img}) => (
    <div className={styles.imageContainer}>
      <div className={styles.fluidContainer}>
        <div className={styles.prodImgContainer}>
          <img className={styles.prodImg} src={img} alt="product item image"/>
        </div>
      </div>
    </div>
);

CProdImage.PropTypes = {
    img: PropTypes.string.isRequired
};

export const CProdName = ({title}) => (
    <h2 className={styles.prodName}>{title}</h2>
);

CProdName.PropTypes = {
    name: PropTypes.string.isRequired
};

export const CProdDescription = ({description}) => (
    <p className={styles.prodDescription}>{description}</p>
);

CProdDescription.PropTypes = {
    description: PropTypes.string.isRequired
};

export const CTileItem = ({title, value}) => (
    <div className={styles.tileItem}>
        <span className={styles.itemTile}>{title}</span>
        <span className={styles.itemValue}>{value}</span>
    </div>
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
        <div>
            {children}
        </div>
    </div>
);

export const CProductItem = ({children}) => (
    <div className={styles.prodItemWrapper}>
        <div className={styles.prodItemContainer}>
          {children}
        </div>
    </div>
);
