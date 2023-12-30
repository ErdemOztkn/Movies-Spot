import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from '../../apiConfig';
import { FaStar } from 'react-icons/fa';

export default function Details() {
  const { type, id } = useParams();

  const [media, setMedia] = useState({});
  const [genres, setGenres] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(apiConfig.getDetails(type, id))
      .then((response) => response.json())
      .then((data) => {
        setMedia(data);
        setGenres(data.genres);
        setCast(data.credits?.cast || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [type, id]);

  console.log(media)

  return (
    <>
      {/*Backdrop Poster */}
      <div className="backDrop">
        <img src={`${apiConfig.originalImage(media.backdrop_path)}`} alt="" />
        <div className="overlay"></div>
      </div>
      <div className="container">
        {/*Media Info */}
        <div className="detailsWrapper">
          <div className="poster">
            <img src={`${apiConfig.w500Image(media.poster_path)}`} alt="" />
          </div>
          <div className="infoBoxWrapper">
            <div className="infoBox">
              <h2 className='mediaName'>{media.title || media.name}</h2>
              <p className='genre'>{genres.map((genre, index) => <span key={index} className="tag">{genre.name}</span>)}</p>
              <h3 className='vote'><FaStar size={17} /> {media.vote_average}</h3>
              <p className='overview'>Özet: <br />{media.overview}</p>
              <h3 className='castTitle'>Oyuncular</h3>
              <div className="cast">
                {cast.map((actor, index) => (
                  <div key={index} className="castCard">
                    <img src={actor.profile_path ? `${apiConfig.w92Image(actor.profile_path)}` : "/src/assets/images/empty.png"} alt="" />
                    <p>{actor.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
