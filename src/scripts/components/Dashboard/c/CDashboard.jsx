import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import styles from './dashboard.scss';



export const Header = ({text, icon}) => {

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <h3 className={styles.headline}>{text}</h3>
        <Icon className={'searchIcon'} svgIcon={icon}/>
      </div>
    </div>
  );
};

Header.PropTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};



export const ListItem = ({icon, textLabel}) => {

  return (
    <a href="#" className={styles.listItemWrapper}>
      <div className={styles.listItem}>
        <Icon className={'icon'} svgIcon={icon}/>
        <h3 className={styles.listItemText}>{textLabel}</h3>
      </div>
    </a>
  );
};

ListItem.PropTypes = {
    textLabel: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    clssName: PropTypes.string.isRequired
  };


  export const Icon = ({svgIcon, className}) => {
    return (
        <SVGInline component='div' className={styles[className]} svg={svgIcon} />
    );
  };

  Icon.PropTypes = {
    svgIcon: PropTypes.string.isRequired
  };


  export const List = ({children}) => {
    return (
      <div className={styles.list}>
        {children}
      </div>
    );
  };



export const CDashboard = ({children}) => {
  return(
    <div className={styles.dashboard}>
      {children}
    </div>
 );
};



export default CDashboard;
