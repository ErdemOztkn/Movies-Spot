import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../apiConfig";
import MediaGrid from '../components/MediaGrid'

export default function MediaList() {
    const { type, query } = useParams();
    const [apiURL, setApiURL] = useState('');

    useEffect(() => {
        if (type === 'movie' || type === 'tv') {
            setApiURL(apiConfig.getPopular(type));
        } else if (type === 'search' && query) {
            setApiURL(apiConfig.getSearchResults(query));
        }
    }, [type, query]);

    return (
        <>
            <MediaGrid apiURL={apiURL} type={type} />
        </>
    )
}
