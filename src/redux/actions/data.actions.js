import { DATA_FETCH_REQUEST, DATA_FETCH_SUCCESS, DATA_FETCH_FAILURE } from "./action.types";
import { getDataProviders, getDataServices } from "../services/data-service"

export { dataActions }

const dataActions = () => dispatch => {

    dispatch(request());
    return getDataServices().then(
        response => {
            let serviceDetails = response.data.map(({ id, attributes }) => ({ id, attributes }));

            getDataProviders().then(
                res => {
                    let providerDetails = res.data.map(({ id, attributes }) => ({ id, attributes }))
                    dispatch(success({ serviceDetails, providerDetails }))
                }
            ).catch(error => {
                console.log("Error", error);
                dispatch(failure({ error }))
            })
        }
    )


    function request() {
        return { type: DATA_FETCH_REQUEST }
    }

    function success(payload) {
        return { type: DATA_FETCH_SUCCESS, payload }
    }

    function failure(payload) {
        return { type: DATA_FETCH_FAILURE, payload }
    }


}
