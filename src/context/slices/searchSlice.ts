import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../Store"

type SearchState = {
    query: string
}

const initialState: SearchState = {
    query: ""
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setQuery: (state: SearchState, action: PayloadAction<string>) => {
            state.query = action.payload
        }
    }
})

export const searchSelectors = {
    getQuery: (state: RootState) => state.search.query
}

export default searchSlice.reducer