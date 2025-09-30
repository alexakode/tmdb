import api from "../lib/axios";
import { useQuery } from "@tanstack/react-query";
export default function Home() {
  const { data } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const result = await api.get("/trending/movie/week");
      console.log(result);
    },
  });
  return (
    <>
      <h1>Hello from home</h1>
    </>
  );
}
