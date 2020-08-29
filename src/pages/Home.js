import React,{useContext} from 'react';
import styled from 'styled-components'
import {FunctionalsContent} from '../context/Context'
import CardComponent from '../component/card/CardComponent'

const HomWrapper=styled.div`
display:block;


`

const Contador=({limit,total})=>{
  //  console.log(Math.floor(total/limit))
    return null
}
const HomePage=(props)=>{
    const { useFetch,apikey,ts,hash,offSet}= useContext(FunctionalsContent)
  

     const url=`https://gateway.marvel.com/v1/public/characters?apikey=${apikey}&ts=${ts}&hash=${hash}&limit=20&offset=${offSet}`;
     const heroList=useFetch(url);
   

  
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
            <Contador limit={limit} total={total} />
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