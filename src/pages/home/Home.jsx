import React from 'react'
import PropTypes from 'prop-types'

import HeroBanner from './hero-banner/HeroBanner'

const Home = props => {
  return (
    <div className='page__home'>
        <HeroBanner />
    </div>
  )
}

Home.propTypes = {}

export default Home