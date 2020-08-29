import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {FunctionalsContent} from '../context/Context'
import styled from 'styled-components'

const InternalWrapper=styled.article`
flex-direction: row;
    width: 100%;
    display:flex;
.col-2 h2 {
    font-size: 25px;
    font-weight: 700;
    color: #3E3E3E;
    margin-top: 0;
    margin-bottom: 50px;
}

.details-comics p {
    font-weight: 700;
    font-size: 18px;
    margin: 0;
    color: #3E3E3E;
    
}
.details-comics{
    margin-bottom:67px;
}
.col-2{
    padding: 0 15px;
    width:50%;
}

.col-2 img {
    width: 100%;
    height: auto;
}
p.data-expert {
    font-weight: 400;
    font-size: 18px;
}
@media(max-width:767px){
    display:block ;
    
    .col-2{
        width: 100%;
    
    }
    .data-expert{
        text-align:center;
    }
}
`;

const InternalPage=(props)=>{
    const { 
        useFetch, 
        apikey,ts,hash }= useContext(FunctionalsContent)
   
       const location=window.location.pathname
       let hero=location.substring(location.lastIndexOf('/')+1)
       
  
    const url =`https://gateway.marvel.com/v1/public/comics/${hero}?apikey=${apikey}&ts=${ts}&hash=${hash}&offset=0`
    let comic=  useFetch(url)
    if(comic.response===null){
        return null
    }else{
        
        let {title,dates,images,description,creators}=comic.response.data.results[0]
        let descriptionText=description===null? "No hay descripción":description;
       
        function capitalizeOnlyFirst(string) 
        {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
        function formato(texto){
            let fecha=new Date(texto)
            return fecha.toDateString()
          }
        console.log(formato(dates[0].date))
    return(<InternalWrapper>
            <div className="col-2">
                <img alt="title" src={`${images[0].path}.jpg`} />
            </div>
            <div className="col-2">
                <h2>{title}</h2>
                <div className="details-comics">
                     <p>Published: {formato(dates[0].date)}</p>
                    {creators.items.map((creator,i)=><p key={i}>{capitalizeOnlyFirst(creator.role)}: {creator.name}</p>)}
                </div>
                <p className="data-expert">
                    {descriptionText}
                </p>

            </div>
        </InternalWrapper>)
    }

}
export default InternalPage