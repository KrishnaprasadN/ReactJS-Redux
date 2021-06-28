const redux = require('redux')

const reducer = (state = {counter: 0}, action) => {
    if (action.type === 'IN') {
        return {counter: state.counter + action.payload}
    }

    if (action.type === 'DE') {
        return {counter: state.counter - action.payload}
    }

    return state
}

const store = redux.createStore(reducer)

export default store
