import React from 'react';
import PropTypes from 'prop-types'
import styles from './grid.scss';

export const Grid = ({ children, num }) => (
    <div className={styles.grid}>
  		<div className={styles.list + ' ' + styles[`SB${num}`]}>
  			{children}
  		</div>
    </div>
);

Grid.propTypes =  {
  num: PropTypes.number.isRequired
};


export const GridItem = ({ children }) => (
    <div className={styles.item}>
        {children}
    </div>
);


Grid.propTypes =  {
  children: PropTypes.node.isRequired
};
