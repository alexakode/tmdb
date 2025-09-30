import MovieCard from "../components/MovieCard";
import { useTrending, usePopularMovies } from "../hooks/useTmdb";
export default function Home() {
    const { data: trending } = useTrending("movie", "week");
    const {data: poular, error} = usePopularMovies();
    return(
        <>
        <h1>Hello from home</h1>
        {trending.results.map.item}
        </>
    )
}
