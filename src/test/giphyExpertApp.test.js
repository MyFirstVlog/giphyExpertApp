import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp'
import { GifGridItem } from '../components/GifGridItem';

describe('Pruebas a la aplicacion del giphy', () => {

    const url = 'https://localhost.com'
    const title = 'La vie de Rick et Morty'
    
    let  wrapper = shallow(<GifGridItem url= {url} title={title} />)
    
    test('debe mostrar el componente gifGridItem correctamente', () => {

        expect(wrapper).toMatchSnapshot()
    })

    test('debe de tener un parrafo con el title', () => {
        
        const porcionDePhtml = wrapper.find('p').text()

        expect(porcionDePhtml.trim()).toBe(title)

    })

    test('debe tener la img en las props url y el alt de la imagen', () => {

        const propsImg =wrapper.find('img')
        expect(propsImg.prop('src')).toBe(url)
        expect(propsImg.prop('alt')).toBe(title)
        
    })

    test('debe de tener el fade bounce', () => {
        
        const propsDiv =wrapper.find('div')

        expect(propsDiv.prop('className').includes('animate__bounce')).toBe(true)

    })
    
    
    
    
}) 
