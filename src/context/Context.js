import React, { createContext,useState } from 'react'
import {data} from '../dataApi'



export const FunctionalsContent =createContext();

const FunctionalsProvider=({children})=>{
    const [buscar,getBuscar]=useState('Buscar');
    const [offSet,getOffSet]=useState(0);
    const {apikey,ts,hash}=data;
   
    
   /*  const fetching=(url)=>{
      if(!url) throw new Error('No hay url')
      const [state,setState]=useState({response:null,error:null,loading:true})
      useEffect(() => {
        
              })

    }; */
    
    return(
    <FunctionalsContent.Provider
        value={{buscar,
            getBuscar,
            getOffSet,
            offSet,
            apikey,ts,hash 
        }}

    >
        {children}
    </FunctionalsContent.Provider>)
}
export default FunctionalsProvider;