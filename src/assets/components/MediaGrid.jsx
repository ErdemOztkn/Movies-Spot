import React, { useState, useEffect } from 'react';
import Card from './Card';
import Buttons from './Buttons';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MediaGrid({ apiURL, type }) {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [totalPage, setTotalPage] = useState();

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const fetchMovies = async () => {
        try {
            const response = await fetch(`${apiURL}&page=${page}`);
            const data = await response.json();
            setMovies(data.results);
            setTotalPage(data.total_pages);
        } catch (error) {
            console.log(error);
        }
    };

    console.log(movies);

    useEffect(() => {
        fetchMovies();
    }, [apiURL, page, type]);

    return (
        <>
            <div className='pageHeader'>
                <h1>
                    {type == "movie" && "Filmler"}
                    {type == "tv" && "Diziler"}
                    {type == "search" && "Sonuçlar"}
                </h1>
            </div>

            <div className="mediaWrapper">
                <div className="mediaGrid">
                    <AnimatePresence>
                        {movies.map((movie, index) => (
                            <motion.div
                                key={movie.id}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}>
                                <Link to={`/details/${movie.media_type || type}/${movie.id}`} style={{ textDecoration: "none" }}>
                                    <Card key={movie.id} poster={movie.poster_path} title={movie.title || movie.name} />
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                <div className="pagination">
                    <Buttons type="outlined" icon={<FaChevronLeft />} onClick={() => handlePageChange(page - 1)} disabled={page <= 1} />
                    <h3>{page}</h3>
                    <Buttons type="outlined" icon={<FaChevronRight />} onClick={() => handlePageChange(page + 1)} disabled={page == totalPage} />
                </div>
            </div>
        </>
    )
}
