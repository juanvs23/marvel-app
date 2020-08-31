import React from 'react'
import StartComponent from '../Starcomponent/StarComponent'
import styled from 'styled-components'



const MenuRightWrapper=styled.div`
width:8%;
float:left;
font-size:1.5rem;
color:#A8A8A8;
@media(max-width:767px){
    width:15%;
    padding-top: 5px;
}
`;

const MenuRightComponent=()=>{
    return(

        <MenuRightWrapper>
            <StartComponent id="principal" />
        </MenuRightWrapper>
    );
}
export default MenuRightComponent;