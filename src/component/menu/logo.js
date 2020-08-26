import React from 'react'
import styled from 'styled-components'

import LogoMarvel from './MarvelLogo.svg'

const Brand=styled.div`
    display:block;
    float:left;
    width:10%;
`;

const Logo=(props)=> {
    return(<Brand><img width="100" height="50" alt="" src={LogoMarvel} /></Brand>)
}
export default Logo;
