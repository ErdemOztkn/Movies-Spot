import React, { useState, useEffect, useRef } from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Card from './Card';
import { Link } from 'react-router-dom';

export default function Carousel({ apiURL, title }) {
    const [movies, setMovies] = useState([]);
    const splideRef = useRef(null);

    useEffect(() => {
        try {
            fetch(apiURL)
                .then((response) => response.json())
                .then((data) => setMovies(data.results));
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        if (splideRef.current) {
            splideRef.current.splide.refresh();
        }
    }, [movies]);

    console.log(movies);

    return (
        <div className='carousel'>
            <div className="carouselTitle">
                <h3>{title}</h3>
            </div>
            <Splide options={{
                perPage: 5,
                type: 'loop',
                focus: 'center',
                gap: '10px',
                height: 'auto',
                arrows: true,
                pagination: false
            }} ref={splideRef}>
                {movies.map((movie) => (
                    <SplideSlide key={movie.id}>
                        <Link to={`/details/${title === "En Beğenilen Filmler" ? "movie" : "tv"}/${movie.id}`} style={{ textDecoration: "none" }}>
                            <Card poster={movie.poster_path} title={movie.title || movie.name} />
                        </Link>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    )
}
