import React from 'react'
import styled from 'styled-components'
import ComicLink from './ComicLink'



const ModalContainer=styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`
const ModalWrapper=styled.div`
    background:white;
    width: 30%;
    border-radius: 5px;
    min-width: 300px;
    height: 448px;
    overflow-y:hidden;
    .titleContainer {
        display: flex;
        justify-content: space-between;
        align-items: top;
       
    }
    .comicList {
        overflow-y: scroll;
        height: 350px;
    }
    .close {
        font-size: 2rem;
        font-weight: 100;
        padding: 10px 15px;
        line-height: 0;
        cursor:pointer;
    }
    h3.title {
        padding: 10px 15px 0 15px;
        font-size: 1.5rem;
    }
`

const ModalTitle=({title,getActive})=>{

    
    const handleClose=(e)=>{
        getActive(false)
    }
return(<div className="titleContainer"><h3 className="title">{title}</h3><div className="close" onClick={handleClose} ><i className="fa fa-times"></i></div></div>)

}
const ComicsList=({comics,id,name})=>{
    
    
  return(<div className="comicList">
          {  comics.items.map((comic,i)=>{
        return(<ComicLink key={i} idPj={id} name={name} Comic={comic} />)
    })}
      </div>)
}

const ModalCard=({comics,id,name,getActive})=>{

    return(
    <ModalContainer id={`${id}`}>
        <ModalWrapper>
            <ModalTitle title={name} getActive={getActive}/>
            <ComicsList id={id} name={name} comics={comics}/>
        </ModalWrapper>
    </ModalContainer>
    )
}
export default ModalCard;