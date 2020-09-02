import React,{useState}  from 'react'
import styled from 'styled-components'
import ModalCard from './ModalCard'
import StartComponentSlave from '../Starcomponent/StarComponentSlave'

const CardContainer=styled.article`
    display:block;
    width:23%;
    float:left;
    background:url(${props=>(props.bg)});
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.2rem;
    overflow: hidden;
    min-width: 230px;
    height: 380px;
    background-position: center;
    margin: 1%;
    background-size: cover;
    
    .starCard {
        position: relative;
        float: right;
        margin: 20px;
        color: white;
        font-size: 25px;
        z-index:2;
    }
    .cardName {
        padding-top: 16rem;
        margin-left: 0;
        color: white;
        font-size: 20px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        background: transparent;
        width: 100%;
        z-index: 2;
        text-align: left !important;
        cursor: pointer;
        text-shadow: 1px 0px 7px black;

    }
    
        
    
    @media(max-width:767px){

        display: block;
        width: 94%;
       
        height: 380px;
       
        margin: 3%;
        
    }

`;

const Star=({id})=>{
return(
    <div className="starCard">
<StartComponentSlave id={id}  />

</div>
)
}
const Modal=({name,getActive,active,comics,id,})=>{
    if(active===true){
        return( <ModalCard 
         id={id}
         name={name}
         comics={comics}
         getActive={getActive}

     /> )
        }else{
            return null
        }
}
const CardComponent=({hero})=>{
    //console.log(hero)
    let {id,name,thumbnail:{path,extension},comics}=hero
    const [activeComicList, setactiveComicList] = useState(false)
    
   const handleClick=(e)=>{
      
        setactiveComicList(true)
    }
   
    return(
        <>
        <CardContainer   
        bg={`${path}.${extension}`}  >
            <Star  id={id}  />
    <button className="cardName"  onClick={handleClick}>{name}</button>
        
        </CardContainer>
           <Modal
           name={name}
           id={id} 
           active={activeComicList} 
           getActive={setactiveComicList}
           comics={comics} 
           />
        </>
    )
}
export default CardComponent