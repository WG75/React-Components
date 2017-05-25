import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import styles from './dashboard.scss';



export const Header = ({text, icon}) => {

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <h3>{text}</h3>
        <Icon svgIcon={icon}/>
      </div>
    </div>
  )
}

Header.PropTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}



export const ListItem = ({icon, textLabel}) => {

  return (
    <a href="">
      <div className={styles.listItem}>
        <Icon svgIcon={icon}/>
        <h3>{textLabel}</h3>
      </div>
    </a>
  )
}

ListItem.PropTypes = {
    textLabel: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }


  export const Icon = ({svgIcon}) => {
    return (
        <SVGInline component='div' className={styles.icon} svg={svgIcon} />
    )
  }

  Icon.PropTypes = {
    svgIcon: PropTypes.string.isRequired
  }


  export const List = ({children}) => {
    return (
      <div className={styles.list}>
        {children}
      </div>
    )
  }



export const CDashboard = ({children}) => {
  return(
    <div className={styles.dashboard}>
      {children}
    </div>
 )
}



export default CDashboard
