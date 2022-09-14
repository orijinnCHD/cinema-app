import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState,useRef } from "react";
import image from "../assets/img/poster.jpg"

const Movie = ({movie}) => {

  const [genreData,setGenreData] = useState([]);
  const effectRan = useRef(false);

  //https://api.themoviedb.org/3/genre/movie/list?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR
  
  //https://api.themoviedb.org/3/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d
  
  const getGenre =  async () =>{

    const data = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR')
                            .then((res)=>{

                              let array = [];

                              if(movie.genre_ids){
                                for (let i = 0; i < movie.genre_ids.length; i++)
                                  {
                                    //console.log(res.data.genres.length);
                                    for (let j = 0; j < res.data.genres.length; j++) {
                                      //console.log(genresData);
                                      if(movie.genre_ids[i] === res.data.genres[j].id)
                                        array.push(res.data.genres[j].name)
                                          
                                    }
                                  
                                  }
                                
                                }    
                                setGenreData(array);
                              
                            })
    
  }
  useEffect( ()=>{getGenre().catch(console.error);},[]);


  /// date formatter

  const dateFormatter = (date) =>{

    // split separe les elements let [] le place dans un tableau
    // par ordre
    let [yy,mm,dd] = date.split("-");
    return [dd,mm,yy].join("/");
  }

  
  // local storage


  //addStorage
  const addStorage = ()=>{
    //? : il y a til deja une sauvegarde
    // cond 1 : on recup les différents sauvegardes dans un tableau
    //sinon : initialisation tableau vide

    let storedData = window.localStorage.movies ? window.localStorage.movies.split(","):[]
  
    // on verifie si il n'a pas deja liker ce film
    // si c'est non alors on recup id du film et on le stocke
    // en local
    if(!storedData.includes(movie.id.toString())){
      storedData.push(movie.id); // on met les donné à la suite 
      window.localStorage.movies = storedData;
    }
  }

  //removeStorage

  const removeStorage = ()=>{

    let storedData = window.localStorage.movies ? window.localStorage.movies.split(","):[]
    //retourner l'array id avec tout les movie sauf celle avec le movie.id
    let newData = storedData.filter((id)=> id != movie.id);
    window.localStorage.movies = newData;
  }

  return (
    <li className="movie-container">
       
        <img src= {(movie.backdrop_path) ? ("https://image.tmdb.org/t/p/original" + movie.backdrop_path) : "./img/poster.jpg" } alt={movie.original_title} />

        <div className="content">
            <h3>{movie.original_title}</h3>
            {movie.release_date ? (<h5>Sorti le : {dateFormatter(movie.release_date)}</h5>):null}
            
            <h4>{movie.vote_average.toFixed(1) + " /10 "} <span>⭐</span></h4>
            <ul className="tag-container">
              {
                movie.genre_ids?
                genreData.map((genre, index)=>(
                  <li key={index}>{genre}</li>
                ))
                : movie.genres.map((genre,index)=><li key={index}>{genre.name}</li>)

              }
            </ul>

            <h3>synopsis</h3>
            <p>{movie.overview ?movie.overview:"no sypnosis"} </p>
            {
              movie.genre_ids?
                <button id="add" className="btn-fav" onClick={()=>addStorage()}>Ajouter au coup de coeur</button>
                : <button id="remove" className="btn-fav"onClick={()=>removeStorage()} >Supprimer le coup de coeur</button>
            }
            
        </div>
      
    </li>
  );
};

export default Movie;
