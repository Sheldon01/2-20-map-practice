import { useMovieGenerator } from "./useMovieGenerator";
export default function MapPractice2() {
    const [movies, regenerate] = useMovieGenerator();
    console.log("movies", movies);

    return (
        <div className="mapPractice">
            <h2>Sheldon&apos;s Movies</h2>
            <button onClick={regenerate}>Change Movies</button>
            <div className="movieList">
                {movies.map((movie, index) => ( 
                            <div key={index} className="movieList">
                                <h3 className="title">{movie.title}</h3>
                                <span>Starring: {movie.star}</span>
                                <span>Genre: {movie.genre}</span>
                                <span>Iconic Quote: {movie.quote}</span>
                            </div>     
                ))}
            </div>
        </div>
    );
}
