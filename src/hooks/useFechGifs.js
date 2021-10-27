import { useState, useEffect } from 'react';
import { getGifs } from "../helpers/GetGifs"



export const useFecthGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {

        getGifs(category)
            .then(gifs => {

                setstate({
                    data: gifs,
                    loading: false
                })



            })


    }, [category])

    return state
}