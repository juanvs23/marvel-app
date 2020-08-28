import React from 'react'
import MenuComponent from '../menu/MenuComponent'

import styled from 'styled-components'

const Wrapper = styled.section`
padding: 8rem 0rem;
max-width: 1000px;
margin: auto;
display: flex;
`;

const LayoutComponent =(props)=>{
    return(
        <>
            <MenuComponent />
            <Wrapper>
                
                {props.children}
            </Wrapper>
        </>
    )
}

export default LayoutComponent