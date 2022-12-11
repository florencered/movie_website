import React from 'react';
import axios from 'axios'; 
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useEffect } from 'react'; //imported use effect and use state hooks from react
import { useState } from 'react';
const Movies = () => { //main fucntion movie
  const api_key = "03e82744afb44f4466d2dcc22a483f9e"; //the api key
  const [loading, setLoading] = useState(true); //this state will be true as default
  const [movie, setMovie] = useState(null); //nothi
  const [error, setError] = useState(false);
  const [input,setInput]=useState(""); 
  const [myOptions, setMyOptions] = useState([])
  
  const requestMovies = (path) => {
    
    const url = "https://api.themoviedb.org/3" + path + "api_key=" + api_key;
    console.log(url);
    axios.get(url)
      .then((res) => { 
        
        console.log("response", res.data);
        setMovie(res.data);
        setLoading(false); 
        for (var i = 0; i < res.data.results.length; i++) {
          myOptions.push(res.data.results[i].title); 
          
        }
        setMyOptions(myOptions);
        // console.log(myOptions); why is the array being logged 60 times
        
        

      }).catch((error) => {
        console.log("error", error);
        setError(true);
      })

  }
  const handleChangeInput = (e) => { 
    console.log("approached")
    setInput(e.target.value);
    console.log(e.target.value);

  }

  //after we click submit
  const handleSearch = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log("I am being clicked");
    //call the api and do the required job  
    const path = "/search/movie?query="+input+"&";
    requestMovies(path)


    // setMovie(inputCity);

  }
  useEffect(() => {
    requestMovies("/trending/movie/day?"); 
  

  }, []);

  return (

    <div className='wrapper'>
      <div className="search-bar">

        
          <div className="form-group">
          <div>
     
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            // onChange={requestMovies}
            variant="standard"
            label="Search Bar" 
            className='searchBar' 
            onChange={handleChangeInput} 
            // value of onchange not read if approached via dropdown
            value={input}
          />
        )}
      />
    </div>

          </div>

          <button type="submit" className="btn" onClick={handleSearch} >
            Search
          </button>
       


      </div>
      <section className='main-card-container'>
        {loading ?<div style={{height:"100vh"}}><h1 className='text' style={{color:"white"}}>Loading</h1></div>  :
        <>
          {movie?.results.length>0 && movie.results.map(movie => {
            return <div className=' card-container ' key={movie.id}>
              
                <div className='card-body'>
                  
                  <span className="card-number card-circle "><b>{movie.vote_average>0?movie.vote_average:"NE"}</b></span>
                  <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="image of the movie" className="card-media" />
                  <span className='card-title'>{movie.title}</span>
                  <span className='card-description subtle'>{movie.overview}</span> 
                </div>
              
        

            </div>
          
          


          })}
          {
            movie?.results.length===0 && <div style={{height:"100vh"}}><h2 style={{color:"white",backgroundColor:"black"}}>No results found</h2></div>
          }

</>
}
      </section>
    </div>

  )
}

export default Movies