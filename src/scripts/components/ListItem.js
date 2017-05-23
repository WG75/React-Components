import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'



const ListItem = (props) => {

  return (
      <div className="list-item">
        <h3>{props.textLabel}</h3>
        <Icon svgIcon={props.icon}/>
      </div>
  )
}

ListItem.PropTypes = {
    textLabel: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

export default ListItem
