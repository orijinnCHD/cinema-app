import React,{useState} from 'react';
import axios from "axios";
import { useEffect } from 'react';
import Movie from './Movie';


const Search = () => {


    /////// data ////////////////////////////////////////////

    // api link
    //https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR

    
    const [movieData,setMovieData] = useState([]);
    const [inputValue,setInputValue] = useState("code");
    const[sortGoodBad,setSortGoodBad] = useState(null);
    
    const getMovies = ()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=" ${inputValue} "&language=fr-FR`)
        .then((res)=>{setMovieData(res.data.results);});
    }

    

    useEffect(()=>{getMovies()},[inputValue]);
    
    return (
        <div>
             <div className='search-container'>

                <form action="">
                    <input type="text" placeholder="Entrez le titre d'un film" id="search"
                    onChange={(e)=>{setInputValue(e.target.value)}} 
                    />
                    <br />
                    <input type="submit" value="Rechercher" id="submit" />
                </form>
                <div className="sort-container">
                    <button id="goodToBad" className="btn"
                    onClick={()=>setSortGoodBad("goodToBad")}>top</button>
                    <button id="badToGood" className="btn"
                    onClick={()=>setSortGoodBad("badToGood")}>flop</button>
                </div>
            </div>
           <ul className="catalogue-container">
                {
                    movieData
                    .slice(0,12)
                    .sort((a,b)=>
                    {
                        if(sortGoodBad === "goodToBad")
                            return b.vote_average - a.vote_average;
                        else if(sortGoodBad === "badToGood")
                            return a.vote_average - b.vote_average;

                        return;
                    })
                    .map((movie,index)=>(<Movie key={index} movie={movie} />))

                    
                }
           </ul>
        </div>
       
       
       
        
        
    );
};

export default Search;