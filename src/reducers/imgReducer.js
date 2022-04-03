import { types } from "../types/types";

const initialState = {
    images: []
}

export const imgReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.imagesAdd:
            return {
                ...state,
                images: [
                    ...state.images,
                    action.payload
                ]
            }

        case types.imagesDelete:
            return {
                ...state,
                images: state.images.filter(
                    e => (e.id !== state.images.id)
                )
            }

        case types.imagesLoaded:
            return {
                ...state,
                images: [...action.payload]
            }

        default:
            return state;
    }

}