import React from "react";

const MovieCard = (props) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className='w-60 mr-6 mb-6 bg-red-500 h-94 overflow-hidden relative shadow-red-500 rounded-md hover:overflow-visible'>
      <div className='w-60 max-h-80'>
        <img
          className='w-60 max-h-80'
          src={
            props.poster_path
              ? API_IMG + props.poster_path
              : "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          }
        />
      </div>

      <div className='flex justify-between h-16 m-auto py-1 px-1'>
        <p className='title'>{props.title}</p>
        <p className='vote'>{props.vote_average}</p>
      </div>

      <div className='translate-y-full hover:translate-y-0 py-1 bg-yellow-400 text-black mt-12 overflow-auto rounded-sm font-normal absolute top-0 bottom-0 left-0 right-0 transition duration-1000 ease-in-out'>
        <h2 className='movie_overview'>Overview - </h2>
        <h3 className='overview_info'>{props.overview}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
