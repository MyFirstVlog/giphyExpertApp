import React from 'react'
import PropTypes from 'prop-types'
import { getGifs } from '../helpers/GetGifs'
import { useFecthGifs } from '../hooks/useFechGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const {data:images,loading} = useFecthGifs(category)

    /**
     * recordar que gifs => setimages(gifs) -> setimages
     * 
     * <GifGridItem key={img.id} {...img} --> manda la info de img como props independientes
     * 
     * const {data:images,loading} -> para renombrar variables
     */



    return (
        <>
            <h3>{category}</h3>

            {loading && <p className='animate__animated animate__jackInTheBox'>Loading...</p>}

            <div className='card-grid'>
                 {images.map(img => {
                     return <GifGridItem key={img.id} {...img} />
                })}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired
} 