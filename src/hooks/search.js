import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../data/api";
import { useParams } from "react-router-dom";

export const useSearch = () => {

    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const { query } = useParams();
    
    const fetchInitialData = () => {
        setLoading(true);
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                setData(res);
                setPageNum((prev) => prev + 1);
                setLoading(false);
            }
        );
    };
    
    const fetchNextPageData = () => {
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                if (data?.results) {
                    setData({
                        ...data,
                        results: [...data.results, ...res.results],
                    });
                } else {
                    setData(res);
                }
                setPageNum((prev) => prev + 1);
            }
        );
    };
    
    useEffect(() => {
        setPageNum(1);
        fetchInitialData();
    }, [query]);

    return {
        loading,
        data,
        pageNum,
        query,
        fetchNextPageData
    }
}
