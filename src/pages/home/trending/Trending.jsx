import React from 'react'
import { useTrending } from '../../../hooks';
import { Carousel, ContentWrapper, SwitchTab } from '../../../components';
import { TabsSwitch } from '../../../constant/definition';

const Trending = () => {
    const { data, loading, onTabChange  } = useTrending();
  return (
    <div className="carouselSection">
    <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTab data={TabsSwitch} onTabChange={onTabChange} />
    </ContentWrapper>
    <Carousel data={data?.results} loading={loading} />
</div>
  )
}

export default Trending