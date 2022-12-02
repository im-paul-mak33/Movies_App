import React, { useState, createContext } from "react";
import Axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import Search from "./Search";
import MovieCard from "../utils/MovieCard";

export const StateContext = createContext();

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const client = useQueryClient();

  const fetchData = async (pageNo) =>
    await Axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=9887b4ff4e5488f5b3ecebc4723af43b&language=en-US&page=${pageNo}`
    ).then((res) => setMovies(res.data.results));

  const { data, isLoading, isError, isSuccess, isFetching, isPreviousData } =
    useQuery(["popular"], fetchData(pageNo), {
      keepPreviousData: true,
      staleTime: 5000,
    });

  if (isLoading) {
    return <h3>Loading .......</h3>;
  }

  if (isError === false) {
    return <h3>Error 404 : Not Available </h3>;
  }
  if (isSuccess) {
    return <h3>Data fetching is successfull</h3>;
  }

  const preFetchNextPage = async () => {
    if (!isPreviousData && movies?.hasMore) {
      await client.prefetchQuery(["popular"], () => fetchData(pageNo + 1));

      setTimeout(() => {
        rerender({});
      }, 1);
    }
  };

  // Previous Problem but now solved, Dated - { 01-12-2022 }
  // The page breaks because when there is an error, the isLoading method becomes false.So, that's why "isError" isn't used.
  // It happens because when using react query, we have to give an unique id which is not undefined in useQuery.
  // Has struggled 4 hrs bcoz of it, as my page was breaking and not showing up data at first render cycle.
  // I solved this problem of mine by the use of this technique which I got referring to this article. " https://www.neldeles.com/blog/posts/handling-undefined-in-react-query "

  //   if (isError) {
  //     return <h3>Page Not Found</h3>;
  //   }

  return (
    <div>
      <StateContext.Provider value={{ movies, setMovies }}>
        <Search />

        <div className='flex gap-4 px-14 pb-5'>
          <button
            className='bg-red-500 border-red-600 text-white w-16 h-10 rounded-sm text-center'
            onClick={() => {
              setPageNo(1);
            }}
          >
            Home
          </button>
          <button
            className='bg-red-500 border-red-600 text-white w-12 h-10 rounded-sm text-center'
            onClick={() => setPageNo(pageNo - 1)}
          >
            Prev
          </button>{" "}
          <div className='bg-red-500 border-red-600 text-white py-2 w-7 h-10 rounded-sm text-center'>
            {pageNo}
          </div>
          <button
            className='bg-red-500 border-red-600 text-white w-12 h-10 rounded-sm text-center'
            onClick={() => {
              setPageNo(pageNo + 1);
            }}
          >
            Next
          </button>
          {isLoading ? <span> Loading...</span> : null}
        </div>
      </StateContext.Provider>

      <div className='flex flex-wrap items-center pr-18 pl-14'>
        {movies?.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
        {data?.map(() => (
          <MovieCard {...data} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
