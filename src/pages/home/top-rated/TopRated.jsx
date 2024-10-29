import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/content-wrapper/ContentWrapper";
import SwitchTabs from "../../../components/switch-tabs/SwitchTab";
import { usePopularAndTopRated } from "../../../hooks";

const TopRated = () => {
    const { data, loading, endpoint, onTabChange } = usePopularAndTopRated('top_rated');

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Top Rated</span>
                <SwitchTabs
                    data={["Movies", "TV Shows"]}
                    onTabChange={onTabChange}
                />
            </ContentWrapper>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />
        </div>
    );
};

export default TopRated;
