import React, { useRef } from "react";
import PropTypes from 'prop-types'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import dayjs from "dayjs";
import { useCarousel } from "../../hooks";
import ContentWrapper from "../content-wrapper/ContentWrapper";
import IfComponent from "../conditional-component/IfComponent";
import SkeletonLoading from "../skeleton-loading/SkeletonLoading";
import Img from "../lazy-load-image/Img";
import PosterFallback from "../../assets/images/no-poster.png";
import CircleRating from "../circle-rating/CircleRating";
import Genres from "../genres/Genres";

import './style.scss';


const Carousel = ({ data, loading, endpoint, title }) => {
    const { url, genres, navigate, navigation, carouselContainer } = useCarousel();

    return (
        <div className="carousel">
            <ContentWrapper>
                <IfComponent condition={!!title}>
                    <div className="carousel__title">{title}</div>
                </IfComponent>
                <BsFillArrowLeftCircleFill
                    className="carousel__nav--left arrow"
                    onClick={() => navigation("left")}
                />
                <BsFillArrowRightCircleFill
                    className="carousel__nav--right arrow"
                    onClick={() => navigation("right")}
                />
                <IfComponent condition={!loading}
                    whenFalse={(
                        <div className="skeleton__loading">
                            <SkeletonLoading />
                            <SkeletonLoading />
                            <SkeletonLoading />
                            <SkeletonLoading />
                            <SkeletonLoading />
                        </div>)}>
                    <div className="carousel__items" ref={carouselContainer}>
                        {data?.map((item) => (
                            <div key={item.id}
                                className="carousel__item"
                                onClick={() => navigate(`/${item.media_type || endpoint}/${item.id}`)}
                            >
                                <div className="carousel__item-poster">
                                    <Img src={item.poster_path ? url.poster + item.poster_path : PosterFallback} />
                                    <CircleRating rating={item.vote_average.toFixed(1)} />
                                    <Genres data={item.genre_ids.slice(0, 2)} genres={genres} />
                                </div>
                                <div className="carousel__item-block">
                                    <span className="title">{item.title || item.name}</span>
                                    <span className="date">{dayjs(item.release_date || item.first_air_date).format("MMM D, YYYY")}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </IfComponent>
            </ContentWrapper>
        </div>
    )
}

Carousel.propTypes = {
    data: PropTypes.array,
    loading: PropTypes.any,
    endpoint: PropTypes.string,
    title: PropTypes.string,
}

Carousel.defaultProps = {
    data: [],
    loading: '',
    endpoint: '',
    title: ''
}

export default Carousel;

