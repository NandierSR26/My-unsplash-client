import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { imagesStartLoading } from '../actions/images'
import { Gallery } from './Gallery'
import { SearchResults } from './SearchResults'

export const MainApp = () => {

    const dispatch = useDispatch();
    
    const { images } = useSelector(state => state.images);
    const { images: resultados } = useSelector(state => state.search);

    useEffect(() => {
        if (resultados.length === 0) {
            dispatch(imagesStartLoading());
        }
    }, [dispatch, images]);

    return (
        <>
            {
                ( resultados.length > 0 ) ? <SearchResults /> : <Gallery />
            }
        </>
    )
}
