import { getRecentMovies } from "@/server/movies";
import MovieCard from "@/components/movie-card";
import { Suspense } from "react";

async function LoadedRecentMovies() {
    const movies = await getRecentMovies();
    // TODO: get carousel working.
    return (
        <div className="grid gap-4 lg:grid-cols-5">
            {movies.map((movie, idx) => (
                <MovieCard key={idx} movie={movie} />
            ))}
        </div>
    );
}

export default function RecentMovies() {
    return (
        <div className="flex flex-col gap-2">
            <div className="text-2xl font-semibold">Recent Movies</div>              
            <Suspense fallback={<div>Loading...</div>}>
                <LoadedRecentMovies />
            </Suspense>
        </div>
    );
}