import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Api from "../Api";


const MovieDetails = () => {
    const param = useParams();
    const [movie, setMovie] = useState([]);

    //get  movie by details
    const getMovieDetails = async () => {
        const data = await Api.getMovieDetails(param.id)
        // (
        //     `https://api.themoviedb.org/3/movie/${param.id}?api_key=c0f4ff63599fb8807220dec0f8cf9c41&language=en`
        // );
        setMovie(data);
    };

    useEffect(() => {
        getMovieDetails();
    }, []);
    return (
        <div>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center ">
                        <img
                            className="img-movie w-30"
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt="ascad"
                        />
                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                                Filmname:
                                {movie.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                Datum:
                                {movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                Anzahl der Bewerter:
                                {movie.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                Bewertung :{movie.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                      
                        <div className="text-end px-2">
                            <p className="card-text-story">Filmbericht :{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="mt-2 d-flex justify-content-center "
                >
                    <Link to="/">
                        <button
                            style={{
                                backgroundColor: "#b45b35",
                                border: "none",
                            }}
                            className="btn btn-primary mx-2"
                        >
                            StartSeite
                        </button>
                    </Link>
                    {
                        (movie.homepage!=="" &&  <a href={movie.homepage}>
                        <button
                            style={{
                                backgroundColor: "#b45b35",
                                border: "none",
                            }}
                            className="btn btn-primary"
                        >
                            Showfilm
                        </button>
                    </a> )
                    }
                        {/* <a href={movie.homepage}>
                        <button
                            style={{
                                backgroundColor: (movie.homepage!=="")?"#b45b35" : "gray",
                                border: "none",
                            }}
                            className="btn btn-primary"
                        >
                            Showfilm
                        </button>
                    </a>  */}
                  
                </Col>
            </Row>
        </div>
    );
};

export default MovieDetails;
