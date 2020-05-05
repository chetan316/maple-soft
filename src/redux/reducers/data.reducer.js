import { DATA_FETCH_REQUEST, DATA_FETCH_SUCCESS, DATA_FETCH_FAILURE } from "../actions/action.types";

const initialState = [];

const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_FETCH_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case DATA_FETCH_SUCCESS:
            return {
                ...state,
                servicesData: action.payload.serviceDetails,
                povidersData: action.payload.providerDetails,
                isLoading: false
            }
        case DATA_FETCH_FAILURE:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            }
        default:
            return state
    }
}

export default DataReducer