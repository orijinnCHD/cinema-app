import React,{useState} from 'react';
import axios from "axios";
import { useEffect } from 'react';
import Movie from './Movie';

const Search = () => {


    /////// data ////////////////////////////////////////////

    // api link
    //https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR

    
    const [movieData,setMovieData] = useState([]);
    
    
    const getMovies = ()=>{
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR")
        .then((res)=>{console.log(res.data.page);setMovieData(res.data.results);});
    }

    

    useEffect(()=>{getMovies();},[]);
    
    return (
        <div>
             <div className='search-container'>

                <form action="">
                    <input type="text" placeholder="Entrez le titre d'un film" id="search" />
                    <br />
                    <input type="submit" value="Rechercher" id="submit" />
                </form>
                <div className="sort-container">
                    <button id="left" className="btn">top</button>
                    <button id="right" className="btn">flop</button>
                </div>
            </div>
           <ul className="catalogue-container">
                {
                    movieData.map((movie,index)=>(<Movie key={index} movie={movie} />))
                }
           </ul>
        </div>
       
       
       
        
        
    );
};

export default Search;