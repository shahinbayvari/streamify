import { MovieData } from "../context/slices/moviesSlice";

type MovieCardProps = {
  movie: MovieData;
};

export function MovieCardComponent({ movie }: MovieCardProps) {
  return (
    <div className="MovieCardComponent">
      <div className="movieInfo">
        <img src={movie.thumbnail} alt="movie poster" />
        <div>
          <b>Title: </b>
          {movie.title}
          <br />
          <b>Cast:</b>
          <br />
          <ul>
            {movie.cast.map((actor) => (<li>{actor}</li>))}
          </ul>
          <b>Genres:</b>
          <ul>
            {movie.genres.map((genre) => (<li>{genre}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
}
