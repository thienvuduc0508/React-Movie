import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";
import { useSelector } from "react-redux";

export const useDetails = (crew) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}`);

    const { url } = useSelector((state) => state.home);

    const _genres = data?.genres?.map((g) => g.id);

    const director = crew?.filter((f) => f.job === "Director");
    const writer = crew?.filter(
        (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
    );

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };
    
    return {
        show,
        setShow,
        videoId,
        setVideoId,
        data,
        loading,
        url,
        _genres,
        director,
        writer,
        toHoursAndMinutes
    }
}

export const useVideoSection = () => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    return {
        show,
        setShow,
        videoId,
        setVideoId
    }
}