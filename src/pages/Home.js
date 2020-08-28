import React,{useContext} from 'react';
import styled from 'styled-components'
import {FunctionalsContent} from '../context/Context'
import CardComponent from '../component/card/CardComponent'

const HomWrapper=styled.div`
display:block;


`

const Contador=({limit,total})=>{
    const {getOffSet}= useContext(FunctionalsContent)
            console.log(Math.floor(total/limit))
    return null
}
const HomePage=(props)=>{
    const {heroList}= useContext(FunctionalsContent)
    if(heroList.count!==undefined){
        let {limit,results,total}=heroList
        console.log(heroList)
        return(
            <HomWrapper>
              {results.map(hero=>{
                
                  let {id,name,thumbnail:{path,extension}}=hero
                 return(<CardComponent 
                    key={id}
                    id={id}
                    hero={hero} 
                   
                 />)
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