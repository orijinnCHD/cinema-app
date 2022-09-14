import axios from 'axios';
import React,{ useEffect,useState } from 'react';
import Header from '../components/Header';
import Movie from '../components/Movie';

const Favorite = () => {


    const [listData,setListData]= useState([]);


    const getFavorite = async ()=>{

        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(","):[];
        let movieArray =[];
        //nos id sont des chaine de caracté séparé par une virgule
        // on doit les séparé et le mettre ndas un tableau
        //https://api.themoviedb.org/3/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d
        for (let i = 0; i < moviesId.length; i++) {
            await axios.get(`https://api.themoviedb.org/3/movie/ ${moviesId[i]} ?api_key=ed82f4c18f2964e75117c2dc65e2161d`)
            .then(res=> movieArray.push(res.data))
            // .then(()=>{setListData(movieArray);});
        }

        setListData(movieArray);

    }

    useEffect(()=>{ getFavorite().catch(console.error); },[listData]);


    /*
    useEffect(()=>{
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(","):[];
        let movieArray =[];
        //nos id sont des chaine de caracté séparé par une virgule
        // on doit les séparé et le mettre ndas un tableau
        //https://api.themoviedb.org/3/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d
        for (let i = 0; i < moviesId.length; i++) {
            axios.get(`https://api.themoviedb.org/3/movie/ ${moviesId[i]} ?api_key=ed82f4c18f2964e75117c2dc65e2161d`)
            .then(res=> movieArray.push(res.data))
            .then(()=>{setListData(movieArray);});
        }

    },[])*/

    return (
        <div>
            <Header/>
            <h2 className="title-fav">Coups de coeur <span>❤</span></h2>
            <ul className="catalogue-container">
                {
                    //console.log(listData[0].id)
                }
                
                {
                    
                    listData.length > 0 ?
                    (listData.map((movie,index)=>
                    (
                        //console.log(movie.id)
                        (<Movie key={index} movie={movie} />)
                    ))) 
                    :<h2>aucun coup de coeur pour l'instant</h2>

                    

                }
            </ul>
        </div>
    );
};

export default Favorite;