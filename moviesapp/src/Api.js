import axios from "axios"
const api_key="c0f4ff63599fb8807220dec0f8cf9c41"
const baseUrl= "https://api.themoviedb.org/3/"
const language="en"

   const getAllMovies = async () => {
    const res = await axios.get(`${baseUrl}movie/popular?api_key=${api_key}&language=${language}`)
    // setMovies(res.data.results)
    return res.data

    // setPageCaount(res.data.total_pages) // wir haben gespeichert für zahl page 
  }
  const getPage = async (page) => {
    const res = await axios.get(`${baseUrl}movie/popular?api_key=${api_key}&language=${language}&page=${page}`)
    // setMovies(res.data.results)
    return res.data
    // setPageCaount(res.data.total_pages) // wir haben gespeichert für zahl page 
  }
  const search = async (word) => {
  
      const res = await axios.get(`${baseUrl}search/movie?api_key=${api_key}&query=${word}&language=${language}`)
      return res.data
    //   setPageCaount(res.data.total_pages) 
      // wir haben gespeichert für zahl page wenn wir suchen auf ein seite
    
    
  }

  const getMovieDetails = async (id) => {
    const res = await axios.get(
        `${baseUrl}movie/${id}?api_key=${api_key}&language=${language}`
    );
    return res.data;
};

  export  default {getAllMovies,getPage,search,getMovieDetails}