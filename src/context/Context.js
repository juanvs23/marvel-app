import React, { createContext,useState } from 'react'
import {data} from '../dataApi'



export const FunctionalsContent =createContext();

const FunctionalsProvider=({children})=>{
    const [buscar,getBuscar]=useState('Buscar');
    const [offSet,getOffSet]=useState(0);
    const [stars,getStars]=useState(false);
    const [starList,getList]=useState([1010699,1009144,1016823])
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