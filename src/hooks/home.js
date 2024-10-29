import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchDataFromApi } from "../data/api";
import { getApiConfig } from "../store/homeSlice";
import { useNavigate } from "react-router-dom";
import { useFetch } from "./useFetch";

export const useHomePage = () => {
    const [background, setBackground] = useState('');
    const [query, setQuery] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch('/movie/upcoming');

    useEffect(() => {
        fetchApiConfig();
    }, []);
    
    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);

    const searchQueryHandler = (event) => {
        if (event.key === 'Enter' && query.length > 0) navigate(`/search/${query}`);
    }

    const submitSearch = () => {
        if(query.length > 0) navigate(`/search/${query}`);
    }


    const fetchApiConfig = () => {
        fetchDataFromApi('/configuration').then((res) => {
            const urlParam = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            }
            dispatch(getApiConfig(urlParam));
        })
    }

    return {
        background,
        setQuery,
        searchQueryHandler,
        submitSearch,
        loading
    }
    
}
