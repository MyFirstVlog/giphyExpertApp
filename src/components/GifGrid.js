import React, {useState, useEffect} from 'react'

export const GifGrid = ({category}) => {

    const [images, setimages] = useState([])

    useEffect(()=>{
        getGifs()
    },[])

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=rick&limit=10&api_key=5El953it319EnsvYVOm9Wk4AWGjZanb1'
        const resp = await fetch(url)
        const {data} = await resp.json()
        
        const gifs = data.map((gif) => {
            return {
                id : gif.id,
                title : gif.title,
                url : gif.images?.downsized_medium.url
            }
        })
        console.log(gifs)

        setimages(gifs)
    }


    return (
        <>
            <h3>{category}</h3>
            <ol>
                    {images.map(({id,title}) => {
                        return <li key={id}>{title}</li>
                    })}
            </ol>
        </>
    )
}
