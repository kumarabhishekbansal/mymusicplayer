import React,{useState,useEffect} from "react";
import { NavLink,useParams } from "react-router-dom";
import { API_URL } from "./context";
const SingleMovie = () => {
  const { id } = useParams();
  const [isloading, setisloading] = useState(true);
  const [movie, setmovie] = useState("");
  const getmovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True")
      {
        setisloading(false);
        setmovie(data);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    var timeout = setTimeout(() => {
      getmovies(`${API_URL}&i=${id}`);
    }, 0.5);
    return () => clearTimeout(timeout);
  }, [id]);


  if(isloading){
    return(
      <>
        <div className="movie-section">
        <div className="load-section">Loading...</div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="single-movie-section">
      <h1 className="movieheading">Your Movie Information</h1>
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt="" className="imagesrc" />
          </figure>
          <div className="card-content">
            <p className="title">{movie.Title}</p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">Rating : {movie.imdbRating}</p>
            <p className="card-text">{movie.Country}</p>
            <NavLink to="/" className="back-btn">Go Back</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
