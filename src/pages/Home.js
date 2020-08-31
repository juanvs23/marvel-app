import React,{useContext,useEffect} from 'react';
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
    const url=`https://gateway.marvel.com/v1/public/characters?apikey=${apikey}&ts=${ts}&hash=${hash}&limit=8&offset=${offSet}`;
    const heroList=useFetch(url);
    



 
    let {response}=heroList
    
    if (response!==null) {
      let {limit,results,total}=response.data
      
      if(buscar!=="Buscar" && buscar !==""){
        fetch(`https://gateway.marvel.com/v1/public/characters?apikey=${apikey}&ts=${ts}&hash=${hash}&name=spider`)
        .then(resp=>resp.json())
        .then(resp=>{console.log(resp)})
        
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

      }
    }else{
      return(

        <HomWrapper>
        <h1>No hay Datos</h1>
    </HomWrapper>
      )
    }
}

export default HomePage