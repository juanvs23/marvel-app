import React, { createContext,useState } from 'react'
import {data} from '../dataApi'



export const FunctionalsContent =createContext();

const FunctionalsProvider=({children})=>{
    const [buscar,getBuscar]=useState('Buscar');
    const [offSet,getOffSet]=useState(0);
    const [stars,getStars]=useState(false);
    const [starList,getList]=useState([])
    const {apikey,ts,hash}=data;
    
    return(
    <FunctionalsContent.Provider
        value={{buscar,
            getBuscar,
            getOffSet,
            stars,getStars,
            starList,getList,
            offSet,
            apikey,ts,hash 
        }}

    >
        {children}
    </FunctionalsContent.Provider>)
}
export default FunctionalsProvider;