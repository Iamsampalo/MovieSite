
// Define the movie type
interface Movie {
  title: string;
  poster_path: string;
  overview: string;
  genres: { name: string }[];
}

// Define the type for the dynamic route parameters
interface MoviePageParams {
  id: string;
}

// Corrected version of generateMetadata
export function generateMetadata({ params }: { params: MoviePageParams }) {
  const { id } = params; // Directly destructure without awaiting

  // Ensure metadata generation works synchronously
  return {
    title: `Movie Details - ${id}`, // Example dynamic title
  };
}

async function fetchMovieDetails(id: string): Promise<Movie> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch movie details for ID: ${id}`);
  }

  // Type the response as 'Movie' here
  const data = await response.json();
  return data as Movie; // Cast the response to the Movie type
}


// Dynamic route page component
const MovieDetails = async ({ params }: { params: MoviePageParams }) => {
  const { id } = params;

  try {
    const movie = await fetchMovieDetails(id); // Type is now Movie

    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
        <img
          className="w-full h-80 object-cover rounded-lg mb-4"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <p className="mb-4">{movie.overview}</p>
        <h2 className="text-xl font-semibold">Genres:</h2>
        <ul className="list-disc pl-4">
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre.name}</li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return (
      <div className="p-8">
        <h1 className="text-2xl font-semibold text-red-500 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-600">We couldn't load the movie details.</p>
      </div>
    );
  }
};

export default MovieDetails;