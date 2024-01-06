import React from 'react'
import PropTypes from 'prop-types'
import { useHomePage } from '../../../hooks'
import IfComponent from '../../../components/conditional-component/IfComponent';
import { ContentWrapper, Img } from '../../../components';

import './style.scss';

const HeroBanner = () => {
  const { loading, background, setQuery, searchQueryHandler } = useHomePage();
  return (
    <div className='hero'>
        <IfComponent condition={!loading}>
          <div className="hero__backdrop">
            <Img src={background} />
          </div>
        </IfComponent>
        <div className='opacity-layer'></div>
        <ContentWrapper>
          <div className='hero__content'>
            <span className="hero__content-title">Welcome.</span>
            <span className='hero__content-subTitle'>Millions of movies, TV shows and people to discover.Explore now.</span>
            <div className='search'>
              <input 
                className='search__input'
                type='text'
                placeholder='Search for a movie or tv show....'
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                />
                <button className='search__button'>Search</button>
            </div>
          </div>
        </ContentWrapper>
    </div>
  )
}

HeroBanner.propTypes = {

}

export default HeroBanner