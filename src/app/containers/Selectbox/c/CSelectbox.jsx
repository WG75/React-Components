import React from 'react';
import PropTypes from 'prop-types';
import styles from './selectbox.scss';
import {svgArrow32} from '../../../theme/svg-inline';
import SVGInline from 'react-svg-inline';

export const CSelectbox = ({children, selectedValue}) => (
	<div className={styles.selectbox}>
		<div className={styles.toggler}>
			<span className={styles.wrap}>
				<span className={styles.placeholder}>{selectedValue}</span>
				<span className={styles.icon}>
					<span className={styles.down}><SVGInline svg={svgArrow32}/></span>
				</span>
			</span>
		</div>
		{children}
	</div>
);

CSelectbox.propTypes = {
	children: PropTypes.node.isRequired,
	selectedValue: PropTypes.string.isRequired
};

export const CSelect = ({children, selectedValue, handleChange}) => (
	<select value={selectedValue} onChange={handleChange}>
		{children}
	</select>
);

CSelect.propTypes = {
	children: PropTypes.node.isRequired,
	selectedValue: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
};


export const COption = ({value, label}) => (
	<option value={value}>{label}</option>
);

COption.propTypes = {
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired
};
