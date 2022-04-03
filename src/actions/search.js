import Swal from "sweetalert2";
import clienteAxios from "../config/axios";
import { prepareImages } from "../helpers/prepareImages";
import { types } from "../types/types";

export const searchStartLoading = (term) => {
    return async (dispatch) => {
        try {

            const resp = await clienteAxios.get('/search/' + term)
            const { results } = resp.data
            dispatch(searchLoaded(results));
        } catch (error) {
            Swal.fire('Error', 'Error desconocido', 'error')
        }
    }
}

const searchLoaded = (images) => ({
    type: types.searchLoaded,
    payload: images
})

export const searchClearState = () => {
    return {
        type: types.searchClearState
    }
}