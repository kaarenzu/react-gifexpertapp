// Los Hooks no son más que funciones, No retorna jsx, pueden tener estado. puede indicar a otros componentes cuando renderizarse según su estado ya que algo cambio.

import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = ( category ) => {
    
    const [state, setSate] = useState({
        data : [],
        loading: true
    })

    useEffect(() => {
        
        getGifs(category)
        .then( img => setSate({
            data : img,
            loading : false
        }))

    }, [category])



    return state // { data : [], loading : true }
}