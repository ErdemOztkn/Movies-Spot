import React, { useState, useEffect } from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Buttons from './Buttons';
import apiConfig from '../../apiConfig';
import { useNavigate } from 'react-router-dom';

export default function HeroSlide() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=API_KEY&include_adult=false&language=tr-TR&sort_by=popularity.desc")
        .then((response) => response.json())
        .then((data) => setMovies(data.results.slice(0, 10)));
      console.log(movies);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Splide options={{
      perPage: 1,
      type: 'fade',
      rewind: true,
      focus: 'center',
      gap: '5px',
      height: 'auto',
      arrows: false,
      paginationDirection: 'ttb',
    }}>
      {movies.map((movie) => (
        <SplideSlide key={movie.id}>
          <HeroSlideItem title={movie.title} overview={movie.overview} posterPath={movie.poster_path} backdropPath={movie.backdrop_path} movieId={movie.id} />
        </SplideSlide>
      ))}
    </Splide>
  );
}

const HeroSlideItem = (props) => {

  const navigate = useNavigate();
  const goDetail = (getId) => {
    navigate(`/details/movie/${getId}`);
  };
  return (
    <div className="heroSlideItemWrapper">
      <img className='backDrop' src={`${apiConfig.originalImage(props.backdropPath)}`} alt="Resim Bulunamadı" />
      <div className="overlay"></div>
      <div className="heroSlideItem">
        {/*Left */}
        <div className="left">
          <h1 className='title'>{props.title}</h1>
          <br />
          <p className='overview'>{props.overview || "Türkçe Film Açıklaması Bulunmuyor!"}</p>
          <br />
          <Buttons type="filled" text="Detaylar" onClick={() => goDetail(props.movieId)} />
        </div>
        {/*Right */}
        <div className="right">
          <img className='poster' src={`${apiConfig.w500Image(props.posterPath)}`} alt="" />
        </div>
      </div>
    </div>
  );
};
