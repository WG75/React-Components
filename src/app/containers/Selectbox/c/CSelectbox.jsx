import React from 'react';
import PropTypes from 'prop-types';
import {svgArrow16} from '../../../theme/svg-inline';
import SVGInline from 'react-svg-inline';
import styles from './selectbox.scss';

export const CSelectbox = ({children, selectedValue}) => (
	<div className={styles.SelectBox}>
		<div className={'Select-control'}>
			<span className={styles.wrap}>
				<span>{selectedValue}</span>
				<span>
					<span><SVGInline className={styles.down} svg={svgArrow16}/></span>
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
