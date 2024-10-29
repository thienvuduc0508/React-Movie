import { useState } from "react"
import { useFetch } from "./useFetch";

export const useTrending = () => {
    const [endpoint, setEndpoint] = useState('day');
    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
    const onTabChange = (tab) => {
        setEndpoint(tab === 'Day' ? 'day' : 'week');
    }

    return {
        data,
        loading,
        onTabChange
    }
}

export const usePopularAndTopRated = (type) => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/${type}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return {
        endpoint,
        data,
        loading,
        onTabChange
    }
}