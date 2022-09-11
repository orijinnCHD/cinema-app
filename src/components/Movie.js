import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import image from "../assets/img/poster.jpg"

const Movie = ({movie}) => {

  const [genreData,setGenreData] = useState([]);


  //https://api.themoviedb.org/3/genre/movie/list?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR
  const getGenre = () =>{

    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR').then((res)=>setGenreData(res.data.genres));
  }

  useEffect(()=>getGenre(),[]);


  return (
    <li className="movie-container">
       
        <img src= {"https://image.tmdb.org/t/p/original" + movie.backdrop_path ? "https://image.tmdb.org/t/p/original" + movie.backdrop_path : image } alt={movie.original_title} />

        <div className="content">
            <h3>{movie.original_title}</h3>
            <span>{movie.release_date}</span>
            <h3>{movie.vote_average + " /10"}</h3>
            <div className="tag-container">{movie.genre_ids}</div>

            <h3>synopsis</h3>
            <p>{movie.overview} </p>
            <button id="btn-fav">Ajouter au coup de coeur</button>
        </div>
      
    </li>
  );
};

export default Movie;
