import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {FunctionalsContent} from '../../context/Context'
import styled from 'styled-components'

const Tolink=styled(Link)`
display:flex;
justify-content:center;
margin-bottom: 15px;
text-decoration: none;
color:#515151 !important;

.content-images {
    width: 25%;
    float: left;
    border-radius: 10px;
    height: 105px;
    overflow: hidden;

}
.content-images img {
    width: 100%;
    height: auto;
}
.content-text{
    width: 65%;
    float: left;
    padding: 0 15px;
}

`;



const ComicLink=({Comic,idPj,name})=>{
    const {useFetch,apikey,ts,hash,offSet }= useContext(FunctionalsContent)
    const {resourceURI}=Comic
    //console.log(resourceURI)

    
    const url=`${resourceURI}?apikey=${apikey}&ts=${ts}&hash=${hash}&limit=20&offset=${offSet}`;
    //const url=`https://gateway.marvel.com/v1/public/characters/${idPj}?apikey=${apikey}&ts=${ts}&hash=${hash}&limit=20&offset=${offSet}`
   
      const comicContent= useFetch(url)
      const {response}=comicContent
      if(response!==null){
                console.log(response.data.results[0])
              const {id, images,title}= response.data.results[0]
            
     if(images!==undefined && title!==undefined && id!==undefined){
        return(<Tolink to={`/internal/${id}`}><div className="content-images"><img alt="" src={`${images[0].path}.jpg`} /></div><div className="content-text"><h4>{title}</h4></div></Tolink>)
     }else{
         return(<div className="Cargando" >Cargando..</div>)
     }
            }else{

                return null
            }
     
}

export default ComicLink