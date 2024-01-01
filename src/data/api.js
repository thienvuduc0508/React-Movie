import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.APP_TMDB_TOKEN;

const headers = {
    Authorization: `bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODE2M2UyYTM2ZDcwMWY4OWFiMjVlMGYxN2JjMmQ0MiIsInN1YiI6IjY1OTIzMGY5ZTAwNGE2NmQ2MzE3YTgzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0RBOtxG8B0Ppp-RbvYMUJLHy0jRgOUNo-vM_R2qdOoQ`
}

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}