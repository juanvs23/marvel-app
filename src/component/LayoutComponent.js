import React from 'react'
import MenuComponent from './menu/MenuComponent'

import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 4em;
  background: #F7F8FA;
`;

const LayoutComponent =(props)=>{
    return(
        <>
            <MenuComponent />
            <Wrapper>
                <h1>hola mundo</h1>
                {props.children}
            </Wrapper>
        </>
    )
}

export default LayoutComponent