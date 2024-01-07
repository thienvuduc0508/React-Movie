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