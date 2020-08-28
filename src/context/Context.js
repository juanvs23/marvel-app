import React, { createContext,useState,useEffect } from 'react'
import Axios from 'axios'
import {data} from '../dataApi'



export const FunctionalsContent =createContext();

const FunctionalsProvider=({children})=>{
    const [saludo,getSaludar]=useState('Buscar');
    const [offSet,getOffSet]=useState(0);
    const [activeComicList, setactiveComicList] = useState(false)
    const [heroList,getHero]=useState([])
    const {apikey,ts,hash}=data;
    
    // useEffect(() => {
    //        const getData= async ()=>{
    //         const url=`https://gateway.marvel.com/v1/public/characters?apikey=${apikey}&ts=${ts}&hash=${hash}&limit=20&offset=${offSet}`;
    //         let dataHero=await Axios.get(url)
    //         try {
    //             getHero(dataHero.data.data)
                
    //         } catch (error) {
                
    //         }
    //  }
    //       getData()
    //  }, [])

    

     const useFetch = (url) => {
        const [response, setResponse] = useState(null);
        const [error, setError] = useState(null);
        useEffect(() => {
            const abortController = new AbortController();
            const signal = abortController.signal;
          const fetchData = async () => {
            try {
              const res = await fetch(url, { signal: signal });
              const json = await res.json();
              setResponse(json);
            } catch (error) {
              setError(error);
            }
          };
          
          fetchData();
          return function cleanup() {
            abortController.abort();
          };
        }, []);
        return { response, error };
      };
    return(
    <FunctionalsContent.Provider
        value={{saludo,
            getSaludar,
            getHero,
            heroList,
            getOffSet,
            offSet,
            useFetch, 
            apikey,ts,hash 
        }}
    >
        {children}
    </FunctionalsContent.Provider>)
}
export default FunctionalsProvider;