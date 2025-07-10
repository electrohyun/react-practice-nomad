import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
    ).json();
    setMovies(json);
    console.log(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              coverImg={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;