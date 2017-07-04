import React from 'react';
import styles from './grid.scss';

export const Grid = ({ children }) => (
    <div className={styles.grid}>
		<div className={styles.list}>
			{children}
		</div>
    </div>
);

export const GridItem = ({ children }) => (
    <div className={styles.item}>
        {children}
    </div>
);
