import { useRef } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useCarousel = () => {
    const carouselContainer = useRef();
    const { url, genres  } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const navigation = (direction) => {
        const container = carouselContainer.current;
        const scrollUnit = direction === 'left'
            ? container.scrollLeft - (container.offsetWidth + 20)
            : container.scrollLeft + (container.offsetWidth + 20)
        return container.scrollTo({ left: scrollUnit, behavior: 'smooth' })
    }

    return {
        url,
        genres,
        navigate,
        navigation,
        carouselContainer
    }
}