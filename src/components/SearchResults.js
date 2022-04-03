import React from 'react'
import { useSelector } from 'react-redux';
import { Image } from './Image';

export const SearchResults = () => {

    const { images } = useSelector(state => state.search);

    return (
        <>
            <p className="results">Resultados({images.length})</p>
            <div className="gallery">
                {
                    images.map(image => (
                        <Image
                            key={image._id}
                            image={image}
                        />
                    ))
                }
            </div>
        </>
    )
}
