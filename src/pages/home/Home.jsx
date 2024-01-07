import React from 'react'
import PropTypes from 'prop-types'

import HeroBanner from './hero-banner/HeroBanner'
import Trending from './trending/Trending'

const Home = props => {
  return (
    <div className='page__home'>
        <HeroBanner />
        <Trending />
    </div>
  )
}

Home.propTypes = {}

export default Home