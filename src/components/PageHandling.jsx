import React from "react";

const PageHandling = () => {
  return (
    <div>
      <div className='bg-red'>Current Page: {pageNo}</div>
      <div>
        <button onClick={() => setPageNo(pageNo - 1)}>Previous Page</button>{" "}
        <button
          onClick={() => {
            setPageNo(pageNo + 1);
          }}
        >
          Next Page
        </button>
        {isFetching ? <span> Loading...</span> : null}
      </div>
    </div>
  );
};

export default PageHandling;
