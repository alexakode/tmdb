import { useSearchParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import MovieCard from "../components/MovieCard";
import { useTrending, usePopularMovies, useSearch } from "../hooks/useTmdb.js";
export default function Home() {
  const [params] = useSearchParams();
  const query = params.get("query");
  const { data: trending } = useTrending("movie", "week");
  const { data: popular, error } = usePopularMovies();
  const { data: search } = useSearch(query || undefined);
  if (query) {
    return (
      <div className="grid">
        <h2>Search results</h2>
        <div className="grid-cards">
          {search?.results?.map((item) => (
            <MovieCard key={`${item.media_type}- ${item.id}`} item={item} />
          ))}
        </div>
      </div>
    );
  }
  console.log(error);
  console.log("trending", trending);
  console.log("popular", popular);
  return (
    <>
      <Carousel title="Trending this week" items={trending?.results}></Carousel>
      <Carousel title="Popular" items={popular?.results} />
    </>
  );
}
