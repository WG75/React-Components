import React from 'react'
import Icon from './Icon'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.text}</h1>
      <Icon svgIcon={props.icon}></Icon>
    </div>
  )
}

Header.PropTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Header
