import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MovieCardProps {
    id: number; // Make this optional if not needed
    title: string;
    poster: string;
    releaseDate: string;
    rating: number;
}

const MovieCard = ({ id, title, poster, releaseDate, rating }: MovieCardProps) => {
    return (
        <Link href={`/movie/${id}`}>
        <div className="movie-card bg-gray-100 rounded-lg p-4 shadow-md">
            <Image
                src={`https://image.tmdb.org/t/p/w500${poster}`}
                alt={title}
                className="w-full h-auto rounded-md"
            />
            <h3 className="text-lg font-bold mt-2">{title}</h3>
            <p className="text-sm text-gray-600">Release Date: {releaseDate}</p>
            <p className="text-sm text-gray-600">Rating: {rating}</p>
        </div>
        </Link>
    );
};

export default MovieCard;
