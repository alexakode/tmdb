import Carousel from "../components/Carousel";
import MovieCard from "../components/MovieCard";
import { useTrending, usePopularMovies } from "../hooks/useTmdb.js";
export default function Home() {
  const { data: trending } = useTrending("movie", "week");
  const { data: popular, error } = usePopularMovies();
  console.log(error);
  console.log("trending", trending);
  console.log("popular", popular);
  return (
    <>
      <Carousel title="Trending this week" items={trending?.results}></Carousel>
    </>
  );
}
