import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
const styles =  require('./dashboard.sass')


export const Header = (props) => {

  return (
      <div className={styles.header}>
        <ListItem textLabel={props.text} icon={props.icon}/>
      </div>
  )
}

Header.PropTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}



export const ListItem = (props) => {

  return (
      <div className={styles.listItem}>
        <Icon svgIcon={props.icon}/>
        <h3>{props.textLabel}</h3>
      </div>
  )
}

ListItem.PropTypes = {
    textLabel: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }


  export const Icon = (props) => {
    return (
        <SVGInline component='div' className={styles.icon} svg={props.svgIcon} />
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
