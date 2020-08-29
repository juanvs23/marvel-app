import React,{useState}  from 'react'
import styled from 'styled-components'
import ModalCard from './ModalCard'

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
    cursor:pointer;
    .starCard {
        position: relative;
        float: right;
        margin: 20px;
        color: white;
        font-size: 25px;
    }
    p.cardName {
        /* position: absolute; */
        margin-top: 21rem;
        margin-left: 15px;
        color: white;
        font-size: 20px;
    }
    @media(max-width:767px){

        display: block;
        width: 94%;
       
        height: 380px;
       
        margin: 3%;
        
    }

`;
const NameCard=(props)=>{
    
return(
    <p className="cardName">
       {props.name}
    </p>
)
};
const Star=(props)=>{
return(
    <div className="starCard">
<i className="fa  fa-star-o"></i>
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
    let {id,name,thumbnail:{path,extension},comics}=hero
    const [activeComicList, setactiveComicList] = useState(false)
    
   const handleClick=(e)=>{
      
        setactiveComicList(true)
    }
   
    return(
        <>
        <CardContainer   onClick={handleClick}
        bg={`${path}.${extension}`}  >
            <Star  />
            <NameCard name={name} />
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