import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const BuscadorWrapper=styled.form`
width:75%;


button.Buscador{
    background:transparent;
    color:#A8A8A8;
    font-size:1.5rem;
    appearance: none;
    border:none;
    box-shadow:none;
    padding: 5px 20px;
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
        width:70%;
        border-bottom:2px solid transparent;
        transition:0.2s 0.2s;
&:focus{
    border:none;
    border-bottom:2px solid #A8A8A8;
    box-shadow: none;
    outline-color: transparent;
    transition:0.2s 0.2s;
}

`

const Buscador =(props)=>{
    return(
        
        <BuscadorWrapper>
               <button className="Buscador" type="submit"> <i className="fa fa-search"></i> </button>< Input type="text" placeholder="Buscar" />
        </BuscadorWrapper>
    )
}
export default Buscador 