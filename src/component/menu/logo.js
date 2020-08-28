import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import LogoMarvel from './MarvelLogo.svg'

const ToHome=styled(Link)`
width:auto;
height:auto;
`;

const Brand=styled.div`
    display:block;
    float:left;
    width:10%;
    img{
        width:100%;
        height:auto;
    }
    @media(max-width:767px){
        display: block;
    float: left;
    width: 100%;
    img{
        width:40%;
        display: block;
        margin:auto;
    }
    }

`;

const Logo=(props)=> {
    return(<Brand><ToHome to="/"><img  alt="" src={LogoMarvel} /></ToHome> </Brand>)
}
export default Logo;
