import { useState, useEffect } from "react";
import ItemCard from "../../components/explore/ItemCard";
import { baseUrl } from "../../baseUrl";

const MoviesPage = () => {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      let results = await fetch(`${baseUrl}/movies`).then(resp => resp.json());
      setMovies(results);
    }
    loadMovies();
  }, []);
  return (
    <div className="flex flex-col w-full self-center">
      <h4 className="text-[22px] font-semibold mx-8 mt-8"> Movies</h4>
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-center gap-2 y9:gap-5 mx-1 md:mx-8 mt-10 self-center ">
          {movies?.map((movie) => (
            <ItemCard movie={movie} key={movie?._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
