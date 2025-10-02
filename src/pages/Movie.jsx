import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useTmdb";
export default function Movie() {
  const { id } = useParams();
  const { data } = useMovieDetails(id);
  if (!data) return <p>Loading…</p>;
  const { title, overview, poster_path, backdrop_path } = data;
  return (
    <article className="movie">
      <div
        className="movie-hero"
        style={{
          backgroundImage: data.backdrop_path
            ? `url(${IMG(data.backdrop_path, "w1280")})`
            : "none",
        }}
      >
        <div className="movie-content">
          <img className="poster" src={IMG(poster_path, "w342")} alt={title} />
          <div>
            <h1>{title}</h1>
            <p>
                {release_date} — {runtime}
            </p>
            <p className="overview">{overview}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
