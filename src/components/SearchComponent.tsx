import { useDispatch, useSelector } from "react-redux"
import { searchSlice, searchSelectors } from "../context/slices/searchSlice"

export function SearchComponent() {
    const dispatch = useDispatch()
    const query = useSelector(searchSelectors.getQuery)

    return (
        <div>
            <input type="text" className="searchbar" placeholder="Enter genre, title or actor..." value={query} onChange={e => dispatch(searchSlice.actions.setQuery(e.target.value))} />
        </div>
    )
}