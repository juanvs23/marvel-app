import React from 'react';
import LayoutComponent from './component/LayoutComponent';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    padding:0;
    margin:0;
    width:100%;
  }
`

function App() {
  return (
   <>
   <LayoutComponent>
      <GlobalStyle  />
     <h1>Hola</h1>
   </LayoutComponent>
   </>
  );
}

export default App;
