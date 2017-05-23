import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'



const Icon = (props) => {
  return (
    <div>
      <SVGInline svg={props.svgIcon} />
    </div>
  )
}

Icon.PropTypes = {
  svgIcon: PropTypes.string.isRequired
}

export default Icon
