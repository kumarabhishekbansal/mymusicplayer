import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, setquery, iserror } = useGlobalContext();

  return (
    <>
      <section className="searchsection">
        <h2 className="searchheading">Search your Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="searchdiv">
            <input
              type="text"
              name="searchtext"
              id="searchtext"
              placeholder="Search here"
              value={query}
              onChange={(e) => setquery(e.target.value)}
              className="searchinput"
            />
          </div>
        </form>
        <div className="card-error">
          <p>{iserror.show && iserror.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;
