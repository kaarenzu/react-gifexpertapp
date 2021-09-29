
   export const getGifs = async ( category ) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=zP0zMbXKSqGvXYa363UYhOGOEl31plSJ`
        const resp = await fetch(url)
        const { data } = await resp.json()

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        // Recordar que como esta función es async no regresa los gifs, regresa una promesa que resuelve la colección de nuestras imagenes
        return gifs;
        

    }
