import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
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