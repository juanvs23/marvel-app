import React,{useContext} from 'react';
import styled from 'styled-components'
import {FunctionalsContent} from '../context/Context'
import{useFetch} from '../hooks/useFetch'
import CardComponent from '../component/card/CardComponent'
import ContadorComponent from '../component/ContadorComponent/contador'
const HomWrapper=styled.div`
display:block;


`


const HomePage=(props)=>{
    
    const { apikey,ts,hash,offSet,buscar}= useContext(FunctionalsContent)
 
const getUrl=()=>{
  if (buscar!=="Buscar" && buscar!=="") {
    
    return `https://gateway.marvel.com/v1/public/characters?apikey=${apikey}&ts=${ts}&hash=${hash}&limit=8&offset=${offSet}&nameStartsWith=${buscar}`
  }else{
    return `https://gateway.marvel.com/v1/public/characters?apikey=${apikey}&ts=${ts}&hash=${hash}&limit=8&offset=${offSet}`
  }
}

  
 const url=getUrl();
  const heroList=useFetch(url);


    


//    const url=`https://gateway.marvel.com/v1/public/characters?apikey=${apikey}&ts=${ts}&hash=${hash}&&nameStartsWith=spider`;

 
    let {response}=heroList
    
    if (response!==null) {
      let {limit,results,total}=response.data
      
    
           return(
               <HomWrapper>
                 
                 {results.map(hero=>{
                   
                     let {id}=hero
                    return(<CardComponent 
                       key={id}
                       id={id}
                       hero={hero} 
                      
                    />
                    )
                 })}
               <ContadorComponent limit={limit} total={total} />
               </HomWrapper>
           )

     
    }else{
      return(

        <HomWrapper>
        <h1>No hay Datos</h1>
    </HomWrapper>
      )
    }
}

export default HomePage