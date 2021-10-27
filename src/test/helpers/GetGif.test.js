import React from "react";
import { shallow } from 'enzyme';
import { getGifs } from "../../helpers/GetGifs";

describe('Pruebas con getGifs fetch', () => {
    test('debe de trater 10 elementos ', async () => {
        const gifs = await getGifs('CR7')

        expect(gifs.length).toBe(10)
    })

    test('debe tener categoria ', async() => {
        const gifs = await getGifs('')

        expect(gifs.length).toBe(0)
    })
    
    
})
