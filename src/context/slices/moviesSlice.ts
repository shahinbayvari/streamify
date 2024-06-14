import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../Store"

export type MovieData = {
    title: string,
    year: number,
    cast: string[],
    genres: string[],
    extract: string
    thumbnail: string
}

type MoviesState = {
    movies: MovieData[] | "loading" | "error"
}

const initialState: MoviesState = {
    movies: "loading"
}

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state: MoviesState, action: PayloadAction<MovieData[] | "loading" | "error">) => {
            state.movies = action.payload
        }
    }
})

export const moviesSelectors = {
    isLoading: (state: RootState) => state.movies.movies !== "loading",
    isErrored: (state: RootState) => state.movies.movies === "error",
    getMovies: (state: RootState) => state.movies.movies
}

export default moviesSlice.reducer