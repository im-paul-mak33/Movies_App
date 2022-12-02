import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Movies from "./components/Movies";

const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div className='p-6 text-white bg-black font-noto-sans-jp cursor-auto h-120%'>
      <div className='flex items-center pb-6'>
        <div className='pr-12'>
          <h1 className='font-semibold text-center text-3xl text-yellow-400 pb-6'>
            Movie <span className='text-emerald-400'>SpOTHuB</span>
          </h1>
          <QueryClientProvider client={client}>
            <Movies />
          </QueryClientProvider>
        </div>
      </div>
    </div>
  );
};
export default App;
