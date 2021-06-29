
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import authReducer from './auth'


const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
})


export default store

/* const reducer = (state = initialState, action) => {
    if (action.type === 'IN') {
        return {counter: state.counter + action.payload, show: state.show}
    }
    if (action.type === 'DE') {
        return {counter: state.counter - action.payload, show: state.show}
    }
    return state
}

const store = redux.createStore(reducer) */
