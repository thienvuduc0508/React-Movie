import React from 'react'
import PropTypes from 'prop-types'

import './style.scss';
import { useTrending } from '../../../hooks';
import { ContentWrapper, SwitchTab } from '../../../components';
import { TabsSwitch } from '../../../constant/definition';

const Trending = props => {
    const { data, loading, onTabChange  } = useTrending();
  return (
    <div className='trending'>
        <ContentWrapper>
            <span className='trending__title'>Trending</span>
            <SwitchTab data={TabsSwitch} onTabChange={onTabChange} />
        </ContentWrapper>
    </div>
  )
}

Trending.propTypes = {}

export default Trending