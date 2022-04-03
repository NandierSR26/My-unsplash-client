import React, { useEffect, useRef, useState } from 'react'
import { ImageHover } from './ImageHover';

export const Image = ({ image }) => {
    const { _id, img, date, label } = image;
    const [hover, setHover] = useState(false)

    const handleHover = () => {
        setHover(true);
    }

    const handleExit = () => {
        setHover(false);
    }
    
    return (
        <div className="gallery-img">
            <img
                src={`${img}`}
                onMouseEnter={handleHover}
                onMouseOut={ handleExit }
            />

            {
                ( hover ) ? <ImageHover image={ image } visibility={ 'visible' }/> : <ImageHover image={ image } visibility={ 'hidden' }/>
            }
        </div>
    )
}
