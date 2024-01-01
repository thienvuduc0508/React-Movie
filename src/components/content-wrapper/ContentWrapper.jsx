import React from 'react'
import PropTypes from 'prop-types'

import './style.scss';

const ContentWrapper = ({ children }) => {
  return (
    <div className='content__wrapper'>{ children }</div>
  )
}

ContentWrapper.propTypes = {
    children: PropTypes.node,
}

export default ContentWrapper