import Swal from "sweetalert2";
import clienteAxios from "../config/axios";
import { peticion } from "../helpers/peticion";
import { prepareImages } from "../helpers/prepareImages";
import { types } from "../types/types";

export const imagesStartAdd = (image) => {
    return async (dispatch) => {
        try {
            const resp = await peticion(image, 'POST');
            const body = await resp.json();

            image.date = body.image.date
            image._id = body.image._id
            Swal.fire('Imagen guardada correctamente', '', 'success');
            dispatch(imagesAdd(image));
            dispatch( imagesStartLoading() )
        } catch (error) {
            Swal.fire('Error', 'No se pudo guardar la imagen', 'error')
        }

    }
}

const imagesAdd = (image) => ({
    type: types.imagesAdd,
    payload: image
})

export const imagesStartLoading = () => {
    return async(dispatch) => {
        try {

            const resp = await clienteAxios.get('/get-image');
            const images = prepareImages(resp.data);
            dispatch(imagesLoaded(images));
        } catch (error) {
            Swal.fire('Error', `Debes realizar la peticion desde ${process.env.REACT_APP_BACKEND_URL}`, 'error')
        }
    }
}

const imagesLoaded = (images) => ({
    type: types.imagesLoaded,
    payload: images
})
