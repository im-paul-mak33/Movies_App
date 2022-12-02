import React, { useState, useContext } from "react";
import { StateContext } from "./Movies";
import Axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  const { setMovies } = useContext(StateContext);

  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=9887b4ff4e5488f5b3ecebc4723af43b&query=";

  const searchHandling = (event) => {
    event.preventDefault();

    Axios.get(API_SEARCH + term).then((res) => setMovies(res.data.results));
  };

  return (
    <div className="pt-6 pb-6 flex px-14">
      <form onSubmit={searchHandling} className="flex items-center">
        <input
          type="text"
          onChange={(event) => setTerm(event.target.value)}
          autoFocus
          placeholder="Your Binge Freakin'ness Start Here!😁🤯"
          className="font-extralight rounded-r-sm h-8 text-center text-violet-600"
        />
        <button className="bg-red-500 border-1 h-8 w-20 border-red-600 m-2 rounded-md">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
