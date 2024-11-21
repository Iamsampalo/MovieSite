import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MovieCardProps {
    id: number; // Make this optional if not needed
    title: string;
    poster: string; // Ensure this holds the dynamic poster path
    releaseDate: string;
    rating: number;
  }
  
  const MovieCard = ({ id, title, poster, releaseDate, rating }: MovieCardProps) => {
    return (
      <Link href={`/movie/${id}`}>
        <div className="movie-card bg-gray-100 rounded-lg p-4 shadow-md">
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster}`} // Use the dynamic poster value
            alt={`${title} Poster`}
            width={500}
            height={750}
            style={{ objectFit: 'cover' }} // Adjust object-fit as needed
          />
          <h3 className="text-lg font-bold mt-2">{title}</h3>
          <p className="text-sm text-gray-600">Release Date: {releaseDate}</p>
          <p className="text-sm text-gray-600">Rating: {rating}</p>
        </div>
      </Link>
    );
  };
  
  export default MovieCard;