import { types } from "../types/types";

const initialState = {
    images: []
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.searchLoaded:
            return {
                ...state,
                images: [...action.payload]
            }

        case types.searchClearState:
            return {
                ...state,
                images: []
            }

        default:
            return state;
    }

}