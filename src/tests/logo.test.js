import React from 'react'
//import {render} from '@testing-library/react'
import { shallow, mount, render } from 'enzyme';
import Logo from '../component/menu/logo'
import LogoMarvel from '../component/menu/MarvelLogo.svg'


describe('Pruebas a logo',()=>{
    test('renderiza?', () => {
       const wrapper=shallow(<Logo />) 
      
       expect(wrapper.contains(<img  alt="" src={LogoMarvel} />))
    });
})

