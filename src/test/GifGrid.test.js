import { shallow } from 'enzyme';
import React from 'react';
import { GifGrid } from '../components/GifGrid';
import { useFecthGifs } from '../hooks/useFechGifs';
jest.mock('../hooks/useFechGifs') //finge llamada a ese archivo


describe('Pruebas con el componente <GetGrid />', () => {
    const category = 'CR7'

    // beforeEach(()=> {
    //     jest.clearAllMocks()
    //     wrapper = shallow(<GifGrid category={category} />)
    // })

    test('hacer el match del componente ', () => {

        useFecthGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category} />)

        expect(wrapper).toMatchSnapshot()
    })

    test('cuando useFetch() regresa info, verificar los items ', () => {
        //debemos hacer mock, como si mi custom hook regresara la info cuando ya la cargo 
        const gifs = [{
            id:'3425345',
            url:'http://localhost.com/images',
            title:'El Bicho'
        }]

        useFecthGifs.mockReturnValue({
            data:gifs,
            loading: false
        })
        
        const wrapper = shallow(<GifGrid category={category} />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    
    
    })

})
