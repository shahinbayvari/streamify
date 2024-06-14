import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./slices/moviesSlice";
import { searchSlice } from "./slices/searchSlice"

const store = configureStore( {
    reducer: {
            movies: moviesSlice.reducer,
            search: searchSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store;