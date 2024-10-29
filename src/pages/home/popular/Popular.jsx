import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/content-wrapper/ContentWrapper";
import SwitchTabs from "../../../components/switch-tabs/SwitchTab";
import { usePopularAndTopRated } from "../../../hooks";

const Popular = () => {
    const { data, loading, endpoint, onTabChange } = usePopularAndTopRated('popular');

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">What's Popular</span>
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

export default Popular;
