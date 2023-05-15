import React, { useContext,useEffect,useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import image from "./image/p2.webp";
import TerminContext from "../context/TerminContext";

const AddItem = () => {
    const {termine,handelSubmit,handelChange1,termin} = useContext(TerminContext)

        console.log(termine);
    return (
       
            <Row className="justify-content-center text-center">
                <Col sm="12" className="">
                    <div className="rectangle p-2 ">
                        <div className="avatar">
                            <img className="imges" src={image} alt="person" />
                        </div>
                        <form onSubmit={handelSubmit}>
                            <label>
                                {" "}
                                <span>Termin Mit :</span>{" "}
                            </label>
                            <br />
                            <input
                            
                                className="inpt"
                                id="name"
                                onChange={handelChange1}
                                value={termin.name}
                                type="text"
                                placeholder=" Name"
                                width="120px"
                            />
                            <br />
                            <label>
                                <span>Termin-Datum :</span>{" "}
                            </label>{" "}
                            <br />
                            <input
                                className="inpt"
                                id="datum"
                                onChange={handelChange1}
                                value={termin.datum}
                                type="text"
                                placeholder=" Datum"
                            />
                            <div>
                                <label>
                                    <span>Uhr Zeit :</span>{" "}
                                </label>{" "}
                                <br />
                                <input
                                    className="inpt"
                                    id="uhr"
                                    onChange={handelChange1}
                                    value={termin.uhr}
                                    type="text"
                                    placeholder=" Uhr Zeit"
                                />
                            </div>
                            <div>
                                <label>
                                    <span>Termin Beschreibung :</span>
                                </label>{" "}
                                <br />
                                <textarea
                             
                                    className="inpt"
                                    rows="3"
                                    cols="15"
                                    id="beschreibung"
                                    onChange={handelChange1}
                                    value={termin.beschreibung}
                                    placeholder=" Drück auf zeigen dann siehe die Beschreibung  "
                                ></textarea>
                            </div>
                            <Button variant="primary" type="submit" value="add">
                                Add neu Termin
                            </Button>
                        </form>
                    </div>
                    <Link to="/termin">
                        <Button className="btn-style" variant="primary">
                            Termine zeigen
                        </Button>
                    </Link>
                </Col>
            </Row>
        
    );
};

export default AddItem;
