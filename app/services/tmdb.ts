import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

export const fetchPopularMovies = async () => {
    try {
        const { data } = await axios.get(
            `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        return data.results;
    } catch (error: any) {
        console.error("Error fetching popular movies:", error.response?.data || error.message);
        throw error; // Re-throw the error for higher-level handling
    }
};

export const fetchMovieDetails = async (id: string) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`;

    console.log("Fetching details from URL:", url); // Debug log

    const response = await fetch(url);

    if (!response.ok) {
        console.error("Error fetching movie details:", await response.text()); // Log response body
        throw new Error(`Failed to fetch movie details for ID: ${id}`);
    }

    return response.json();
};
