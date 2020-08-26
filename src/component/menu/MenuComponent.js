import React from 'react'
import Buscador from './buscador'
import styled from 'styled-components'
import Logo from './logo'
import StarComponent from '../StarComponent'

const Header=styled.header`
width: 100%;
    top: 0;
    position: fixed;
    left: 0;
    background: #fff;
    min-height: 50px;
    padding: 7px 16px;
    display: flex;
    align-items: center;
    box-shadow:0 0 5px rgba(0,0,0,0.3);
    justify-content:center;

`;
const HeaderWrapper=styled.nav`
max-width:1200px;
display:flex;
width:100%;
align-items: center;
`

const MenuComponent=(props)=>{
    return(
    <Header>
        <HeaderWrapper>
        <Logo /> <Buscador /><StarComponent />
        </HeaderWrapper>
    </Header>)
}
export default MenuComponent