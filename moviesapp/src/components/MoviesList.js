import React from "react";
import {  Row} from "react-bootstrap";
import CardMovie from "./CardMovie";
import Paginations from "./Paginations";



const MoviesList = ({movies,getPage,pageCount}) => {
  return (
    <Row className="mt-3">
      {movies.length >=1 ? 
        (movies.map((mov)=>{
          return(  <CardMovie key={mov.id} mov={mov}/>)
        })):<h2 className="text-center p-5">es gibt keinen Movies</h2>
      }
    {movies.length >=1 ? 
   <Paginations getPage={getPage} pageCount={pageCount} /> : null  }
   {/* hier wenn wir suchen und keine filmen zeigt nicht Pagination  */}
    </Row>
  );
};

export default MoviesList;
