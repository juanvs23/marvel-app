import React from 'react'

import { shallow, mount, render } from 'enzyme';

import toJson from 'enzyme-to-json';
import StarComponent from '../component/Starcomponent/StarComponent'



describe('Pruebas a StartCompoent',()=>{
    test('Que tipo de props recibe', () => {
        const id ='principal';
        
       const wrapper= shallow(<StarComponent id={id} />) 
        
      expect( toJson(wrapper)).toMatchSnapshot();
    });
})