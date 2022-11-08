import { configureStore, createSlice } from "@reduxjs/toolkit";

const couterSlice = createSlice({
    name: "counter",
    initialState: {
        couter1 : 0,
        couter2 : 1
    },
    reducers : {
        tang: (state) => state.couter2 + 1,
        giam: (state) => {
            return(
                (state.couter2 < 1 ? state.couter2 : state.couter2 - 1)
            )
        }
    }
})

const store = configureStore({
    reducer: couterSlice.reducer
})

const { actions, reducer } = couterSlice
const { tang , giam } = actions
export { actions, reducer , tang , giam , store}