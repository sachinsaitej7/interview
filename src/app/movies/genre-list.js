import { getGenereAndMovies } from "@/server/movies";
import MovieCard from "@/components/movie-card";
import { Suspense } from "react";

async function MovieListCaraousel({ movies }) {
    // TODO: show more than 6 movies by scrolling
    const moviesToShow = movies.slice(0, 6);
    return (
        <div className="grid grid-cols-6 gap-4">
            {moviesToShow.map((movie, idx) => (
                <MovieCard key={idx} movie={movie} />
            ))}
        </div>
    );
}

async function LoadedGenres() {
    const genre = await getGenereAndMovies();

    return (
        <div className="flex flex-col gap-4">
            {genre.map((genre, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                    <h2 className="text-md font-semibold text-gray-800 dark:text-white">
                        {genre.title}
                    </h2>
                    <MovieListCaraousel movies={genre.movies}/>
                </div>
            ))}
        </div>
    );
}

export default function GenreList() {
    return (
        <div className="flex flex-col gap-2">
            <div className="text-2xl font-semibold">Movies by Genre</div>
            <Suspense fallback={<div>Loading...</div>}>
                <LoadedGenres />
            </Suspense>
        </div>
    );
}