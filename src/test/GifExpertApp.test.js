import { shallow } from 'enzyme';
import React from 'react';
import GifExpertApp from '../GifExpertApp';


describe('Pruebas generales a la app gifExpertApp', () => {
    
    test('debe hacer match con el wrapper el snapshot ', () => {
        const wrapper = shallow(<GifExpertApp  />)
        
        expect(wrapper).toMatchSnapshot()
    })

    test('debe mostart una lista de categorias ', () => {
        const categorias = ['CR7', 'Real Madrid']
        const wrapper = shallow(<GifExpertApp defaultCategories={categorias} />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categorias.length)
    })
    
    
})
