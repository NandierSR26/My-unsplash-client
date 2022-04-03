import React from 'react';
import { useSelector } from 'react-redux';
import { Image } from './Image'

export const Gallery = () => {

    const { images } = useSelector(state => state.images);

    return (
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
    )
}
