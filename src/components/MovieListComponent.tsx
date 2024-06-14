import { useDispatch, useSelector } from "react-redux"
import { searchSelectors } from "../context/slices/searchSlice"
import { MovieData, moviesSelectors, moviesSlice } from "../context/slices/moviesSlice"
import axios from "axios"
import { useEffect } from "react"
import { MovieCardComponent } from "./MovieCardComponent"

async function loadMovies(): Promise<"error" | MovieData[]> {
    try {
        const response = await axios.get<MovieData[]>("/movies.json")
        if (response.status !== 200) {
            return "error"
        }
        return response.data
    } catch (e: any) {
        console.error("Error loading data", e)
        return "error"
    }
}

function isMovieFiltered(movie: MovieData, query: string) {
    const lowerCaseQuery = query.toLowerCase()
    return movie.title.toLowerCase().includes(lowerCaseQuery)
        || movie.cast.some(actor => actor.toLowerCase().includes(lowerCaseQuery))
        || movie.genres.some(genre => genre.toLowerCase().includes(lowerCaseQuery))
}

export function MovieListComponent() {
    const dispatch = useDispatch()
    const query = useSelector(searchSelectors.getQuery)
    const movies = useSelector(moviesSelectors.getMovies)

    useEffect( () => {
        loadMovies()
            .then(value => dispatch(moviesSlice.actions.setMovies(value)))
            .catch(_ => dispatch(moviesSlice.actions.setMovies("error")))
    }, [dispatch])

    if (movies === "error") {
        return (
            <div>
                <p>Error: Failed to load movies from API</p>
            </div>
        )
    }

    if (movies === "loading") {
        return (
            <div>
                <p>Loading movies...</p>
            </div>
        )
    }

    return (
        <div className="MovieListComponent">
            {movies
                .filter(movie => isMovieFiltered(movie, query))
                .map(movie => (<MovieCardComponent movie={movie} />))}
        </div>
    )
}