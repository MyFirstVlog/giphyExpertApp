import { shallow } from 'enzyme';
import React from 'react';
import { AddCategory } from '../components/AddCategory';


describe('Pruebas en AddCategory', () => {

    // const setCategorias = () => {} usar jest, pára saber internamente que valores de entrada se suaron

    const setCategorias = jest.fn()
    let  wrapper 

    beforeEach(()=> {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategorias={setCategorias} />)
    }) //sirve para inciail la condicion en cada uno de los tests

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot()
    })

    test('evaluar cambios en la caja de texto ', () => {
        const input = wrapper.find('input')
        const value = 'Hola Mundo'
        input.simulate('change', {
            target:{
                value:value
            }
        })  // luego de la coma en el change va el evento que sera enviado a hanflechange, sino hay error

        expect(wrapper.find('p').text().trim()).toBe(value)
    })
    
    test('no debe de postear la info en onSubmit', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategorias).not.toHaveBeenCalled()

    })

    test('debe de llamar el setCategorias y limpiar la caja de texto', () => {
        
        const input = wrapper.find('input')
        const value = 'Hola Mundo'
        input.simulate('change', {
            target:{
                value:value
            }
        }) 

        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategorias).toHaveBeenCalled()
        expect(setCategorias).toHaveBeenCalledTimes(1)
        expect(setCategorias).toHaveBeenCalledWith(expect.any(Function))
        expect(wrapper.find('input').text().trim()).toBe('')


    })
    
    
    
})
