import RecentMovies from "./movies/recent-movies";
import GenreList from "./movies/genre-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-6 items-center p-12">
      <RecentMovies />
      <GenreList />
    </main>
  );
}