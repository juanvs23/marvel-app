import React from 'react';
import LayoutComponent from './component/layout/LayoutComponent';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import InternalPage from './pages/Internal';


const GlobalStyle = createGlobalStyle`
*, ::after, ::before {
  box-sizing: border-box;
}
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    padding:0;
    margin:0;
    width:100%;
    font-size:16px;  
    @font-face {font-family: "SF UI Text"; src: url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.eot"); src: url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.woff") format("woff"), url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/273b3d7049ba2346b26317cb3938766e.svg#SF UI Text") format("svg"); }
    font-family: "SF UI Text";
    background: #F7F8FA;
    box-sizing: border-box;
  }
  #root{
    box-sizing: border-box;
  }
`;

function App() {
  return (
   <Router>
    <LayoutComponent>
        <GlobalStyle  />
      <Switch>
            <Route exact path="/" >
              <HomePage />
            </Route>
            <Route  path="/internal/:id" >
              <InternalPage />
            </Route>
      </Switch>
    </LayoutComponent>
   </Router>
  );
};

export default App;
