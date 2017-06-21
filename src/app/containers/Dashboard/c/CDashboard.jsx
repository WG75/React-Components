import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import styles from './dashboard.scss';
import * as Icons from '../../../theme/svg-inline/';


export const CHeader = ({text, icon}) => (
	<div className={styles.headerWrapper}>
		<div className={styles.header}>
			<h3 className={styles.headline}>{text}</h3>
			<CIcon className={styles.searchIcon} svgIcon="svgSearchPortfolio" />
		</div>
	</div>
);

CHeader.PropTypes = {
	text: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export const CListItem = ({icon, textLabel}) => (
	<a href="#" className={styles.listItemWrapper}>
		<div className={styles.listItem}>
			<CIcon className={styles.icon} svgIcon={icon}/>
			<span className={styles.listItemText}>{textLabel}</span>
		</div>
	</a>
);

CListItem.PropTypes = {
	textLabel: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	clssName: PropTypes.string.isRequired
};

export const CIcon = ({svgIcon, className}) => (
	<SVGInline component="div" className={className} svg={Icons[svgIcon]}/>
);

CIcon.PropTypes = {
	svgIcon: PropTypes.string.isRequired
};

export const CList = ({children}) => (
	<div className={styles.list}>
		{children}
	</div>
);

export const CDashboard = ({children, backgroundColor}) => (
	<div className={styles.dashboard} style={{ backgroundColor }}>
		{children}
	</div>
);
