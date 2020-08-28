import React from 'react'
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
            <i className="fa  fa-star-o"></i>
        </MenuRightWrapper>
    );
}
export default MenuRightComponent;