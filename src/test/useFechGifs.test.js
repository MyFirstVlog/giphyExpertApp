import React from 'react';
import { useFecthGifs } from '../hooks/useFechGifs';
import {renderHook} from '@testing-library/react-hooks'


describe('Pruebas en el customHook useFetchGifs', () => {
    test('debe retornar el estado inicial', async() => {

        
        const {result, waitForNextUpdate} = renderHook(() => useFecthGifs(''))
        const {data,loading} = result.current // valor actaul del hook 

        await waitForNextUpdate()

        // const{data:images,loading} = useFecthGifs('CR7')

        console.log(data, loading)

        expect(data).toEqual([])
        expect(loading).toBe(true)
    })

    test('debe retornar un arreglo de imagenes y loading false ', async () => {
        const {result,waitForNextUpdate } = renderHook(() => useFecthGifs('CR7'))

        await waitForNextUpdate()

        const {data,loading} = result.current 

        expect(data.length).toEqual(10)
        expect(loading).toBe(false)
    })
    
    
})
