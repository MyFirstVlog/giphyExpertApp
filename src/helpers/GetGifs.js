

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=5El953it319EnsvYVOm9Wk4AWGjZanb1`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    })

    //Esto retorna unas promesa que resueva los gifs entonces al otro lado debo de poner obligatoriamente then
    return gifs
}