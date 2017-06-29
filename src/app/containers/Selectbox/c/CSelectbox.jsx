import React from 'react';
import styles from './selectbox.scss';
import {svgArrow32} from '../../../theme/svg-inline';
import SVGInline from 'react-svg-inline';

export const CSelectbox = ({children, toggle, selectedText}) => (
	<div className={styles.selectbox}>
		<button className={styles.toggler} onClick={toggle}>
			<span className={styles.wrap}>
				<span className={styles.placeholder}>{selectedText}</span>
				<span className={styles.icon}>
					<span className={styles.down}><SVGInline svg={svgArrow32} /></span>
				</span>
			</span>
		</button>
		{children}
	</div>
);

export const CSelect = ({children, selectedValue, selectChange}) => (
	<select value={selectedValue} onChange={selectChange}>
		{children}
	</select>
);

export const COption = ({value, text}) => (
	<option value={value}>{text}</option>
);
