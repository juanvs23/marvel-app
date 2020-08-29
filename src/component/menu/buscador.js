import React,{useContext,useRef} from 'react'
//import PropTypes from 'prop-types'
import styled from 'styled-components'



import {FunctionalsContent} from '../../context/Context'

const BuscadorWrapper=styled.div`
width:85%;
float:left;

button.Buscador{
    background:transparent;
    color:#A8A8A8;
    font-size:1.5rem;
    appearance: none;
    border:none;
    box-shadow:none;
    padding: 5px 20px;
    outline-color: transparent !important;
}

`
const Input=styled.input`
background:transparent;
    color:#A8A8A8;
    font-size:1.5rem;
    appearance: none;
    border:none;
    box-shadow:none;
    outline-color: transparent;
        padding: 5px 20px;
        width:88%;
        border-bottom:2px solid transparent;
        transition:0.2s 0.2s;
&:focus{
    border:none;
    border-bottom:2px solid #A8A8A8;
    box-shadow: none;
    outline-color: transparent;
    transition:0.2s 0.2s;
}
button.Buscador{
    transition:0.5s 0.3s all;
}
@media(max-width:767px){
    width: 72%;
}

`

const Buscador =(props)=>{
    const {saludo,getSaludar}= useContext(FunctionalsContent)
    const HeroBuscar=useRef()
  const handlerVanish=(e)=>{
        document.querySelector('button.Buscador').style.visibility="hidden"
  }
  const handlerShow=(e)=>{
    if(HeroBuscar.current.value.length===0){
        document.querySelector('button.Buscador').style.visibility="visible"
         getSaludar( "Buscar")
    }

}
    const handlerSubmit=(e)=>{
       if(HeroBuscar.current.value.length>=0){
           
           e.preventDefault()
           getSaludar( HeroBuscar.current.value)
       }else if(saludo.length===0|| HeroBuscar.current.value===0){
        getSaludar( "Buscar")
       }
    }
    return(
        
        <BuscadorWrapper >
               <button className="Buscador" type="button"> <i className="fa fa-search"></i> </button>< Input ref={HeroBuscar} onFocus={handlerVanish} onBlur={handlerShow} onChange={handlerSubmit} type="text"  placeholder={saludo} />
        </BuscadorWrapper>
    )
}
export default Buscador 