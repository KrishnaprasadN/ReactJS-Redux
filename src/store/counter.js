import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, show: true }

// note that reducer internally uses 'immer' to mutate the state
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state, action) {
            state.counter = state.counter + action.payload
        },
        decrement(state, action) {
            state.counter = state.counter - action.payload
        }
    }
})

export const counterActions = counterSlice.actions
export default counterSlice.reducer