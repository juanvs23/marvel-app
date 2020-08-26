import React from 'react';
import LayoutComponent from './component/LayoutComponent';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom'


const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    padding:0;
    margin:0;
    width:100%;
    font-size:16px;  
    @font-face {font-family: "SF UI Text"; src: url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.eot"); src: url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.woff") format("woff"), url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.svg#SF UI Text") format("svg"); }
    font-family: "SF UI Text";
    background: #F7F8FA;
  }
`

function App() {
  return (
   <Router>
   <LayoutComponent>
      <GlobalStyle  />
     <Switch>

     </Switch>
   </LayoutComponent>
   </Router>
  );
}

export default App;
