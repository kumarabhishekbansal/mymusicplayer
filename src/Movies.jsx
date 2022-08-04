import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";
const Movies = () => {
  const { movie ,isloading} = useGlobalContext();

  if(isloading){
    return(
      <>
        <div className="movie-section">
        <div className="load-section">Loading....</div>
        </div>
      </>
    )
  }

  return (
    <>
      <section className="movie-grid">
        <div className="grid-4-col">
          {movie.map((curelem) => {
            const { imdbID, Title, Poster } = curelem;
            const moviename=Title.substring(0,15);
            return (
                  <div className="card"  key={imdbID} >
                  <NavLink to={`movie/${imdbID}`} className="Navlink">
                    <div className="card-info">
                    <img src={Poster} alt="" className="imagesrc"/>
                    <h2 className="title">{moviename.length>=15?`${moviename}....`:moviename}</h2>
                    </div>
                    </NavLink>
                  </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
