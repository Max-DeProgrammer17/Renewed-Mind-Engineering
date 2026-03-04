import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieN, setMoviesN] = useState("");
  useEffect(() => {
    async function fetchMovies() {
      if(!movieN) return;

      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=c8380faf&s=${movieN}`
        );

        const data = await res.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          console.error(data.Error);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchMovies();
  }, [movieN]);


  return (
   <div>
    <input type="text" value={movieN} onChange={(e)=>setMoviesN(e.target.value)}/> 

      <h1>Movie List</h1>

      {movies.length === 0 ? (
        <p>Loading or no data...</p>
      ) : (
        movies.map(movie => (
          <p key={movie.imdbID}>
            {movie.Title} / {movie.Year}
          </p>
        ))
      )}
    </div>
  );
}

export default App;