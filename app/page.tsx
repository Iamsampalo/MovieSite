"use client";
import { useEffect, useState } from "react";
import { fetchPopularMovies } from "./services/tmdb";
import MovieCard from "./components/MovieCard";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchPopularMovies();
      console.log("Movies data:", data); // Debug the response
      setMovies(data);
    };
    loadMovies();
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="p-8">
      <input
        type="text"
        placeholder="Search movies..."
        className="mb-6 p-2 w-full border rounded-lg"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard
          key={movie.id}
          id={movie.id} // Pass ID to the component
          title={movie.title}
          poster={movie.poster_path}
          releaseDate={movie.release_date}
          rating={movie.vote_average}
          />
          ))}
        
      </div>
    </div>
  );
};
// console.log('Filtered Movies:', filteredMovies);
export default Home;
