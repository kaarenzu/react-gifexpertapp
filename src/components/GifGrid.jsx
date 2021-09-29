import React from "react"
import { useFetchGifs } from "../hooks/useFetchGifs"
import GifGridItem from "./GifGridItem";


const GifGrid = ({ category }) => {

// Envío la categoria como parametro al hook para la petición.
    const { data:image, loading }= useFetchGifs(category);


    return (
        <>
            <h3> {category} </h3>
            { loading && <p>loading</p>}
            <div className="card-grid">
                {
                    image.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}

                        />
                    ))
                }
            </div>
        </>


    )
}

export default GifGrid
