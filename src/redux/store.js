import { createStore, applyMiddleware, compose } from "redux"
import Data from "./reducers/data.reducer"
import thunkMiddleware from "redux-thunk"


//const store = createStore(Data, applyMiddleware(thunkMiddleware))

export const store = createStore(Data,
    compose(applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f),
);



export default store;