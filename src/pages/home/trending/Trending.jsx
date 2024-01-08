import React from 'react'

import './style.scss';
import { useTrending } from '../../../hooks';
import { Carousel, ContentWrapper, SwitchTab } from '../../../components';
import { TabsSwitch } from '../../../constant/definition';

const Trending = () => {
    const { data, loading, onTabChange  } = useTrending();
  return (
    <div className='trending'>
        <ContentWrapper>
            <span className='trending__title'>Trending</span>
            <SwitchTab data={TabsSwitch} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending