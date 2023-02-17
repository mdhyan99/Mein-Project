import { Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Api from "./Api";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MoviesDetails from "./components/MoviesDetails";


function App() {

  const [movies, setMovies] = useState([])
  const [pageCount,setPageCaount] = useState(0)

  //get all movies by axios 
  const getAllMovies = async () => {
    const data = await Api.getAllMovies()
    // axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c0f4ff63599fb8807220dec0f8cf9c41&language=en")
    setMovies(data.results)

    setPageCaount(data.total_pages) // wir haben gespeichert für zahl page 
  }

  // get current page für wie viel page haben wir
  const getPage = async (page) => {
    const data = await Api.getPage(page)
    // (`https://api.themoviedb.org/3/movie/popular?api_key=c0f4ff63599fb8807220dec0f8cf9c41&language=en&page=${page}`)
    setMovies(data.results)
    setPageCaount(data.total_pages) // wir haben gespeichert für zahl page 
  }
  useEffect(() => {
    getAllMovies();
  }, [])

  //to search in Api
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const data= await Api.search(word)
      // (`https://api.themoviedb.org/3/search/movie?api_key=c0f4ff63599fb8807220dec0f8cf9c41&query=${word}&language=en`)
      setMovies(data.results)
      setPageCaount(data.total_pages) // wir haben gespeichert für zahl page wenn wir suchen auf ein seite
    
    }
  }
  return (
    <div className="font color-body ">
      <NavBar search={search} />
      <Container>
     <BrowserRouter >
     <Routes>
         <Route path="/" element={<MoviesList movies={movies} getPage={getPage} pageCount ={pageCount}/>} />
         <Route path="/movie/:id" element={<MoviesDetails />} />

     </Routes>
     
     </BrowserRouter>
        
      </Container>
    </div>
  );
}

export default App;