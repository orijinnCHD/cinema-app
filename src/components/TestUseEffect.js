import axios, { Axios } from 'axios';
import React,{useState,useEffect,useRef,useCallback} from 'react';

const TestUseEffect = () => {
    
    const [genreData,genreDataSet] = useState([]);
    const effectRan = useRef(false);


    //https://api.themoviedb.org/3/genre/movie/list?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR

    useEffect(()=>{

        const getGenre = async ()=>{
            const data = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR')
            .then(res=>{

                let array = [];

                for (let i = 0; i < 10; i++) {
                    for (let j = 0; j < 30; j++) {
                        array.push(i +j);

                        
                    }
                    
                }

                genreDataSet(array);
            });
        }
       
        getGenre().catch(console.error);
        //console.log('a' + genreData);
    },[])

    return (
        <div>
            {
                //console.log("b" + genreData)
            }
        </div>
    );
};

export default TestUseEffect;