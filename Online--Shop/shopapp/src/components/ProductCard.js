import React, { useContext } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";

import { BiLike} from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { AiFillHeart} from "react-icons/ai";
import { RiDeleteBin5Line} from "react-icons/ri";

import FavoriteContext from "../context/FavoriteContext";
import WarenKorbContext from "../context/WarenKorbContext";


const ProductCard = ({ item }) => {

    const {favorite,addFav} =useContext(FavoriteContext)
    console.log(favorite);
    const { addKorb,cart } = useContext(WarenKorbContext);
    
    return (
        <Row className="g-3 start">
            <Col>
                <Card className="h-100">
                    <Card.Img
                    className="img"
                        variant="top"
                        src={item.picture2}
                    />

                    <Card.Body className="d-flex flex-column">
                        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                            <span className="spanText ">{item.text}</span>
                            <span className="spanText ms-2 text-muted">
                                {item.price}€
                            </span>
                        </Card.Title>

                        <div className="mt-auto text-center">
                            {/* wenn gibt kein Product in warenkorb zeigt uns nur button in warenkorb */}

                            <Button onClick={() => addKorb(item.id)}>in den Warenkorb</Button>
                        {
                             cart?(console.log("Hallo")):(
                                <div
                                className="d-flex align-items-center flex-column"
                                style={{ gap: "0.5rem" }}
                            >
                             <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{ gap: "0.4rem" }}
                                >
                                    <Button>-</Button>

                                    <div>
                                        <span className="spanText">
                                            in Warenkorb
                                        </span>
                                    </div>
                                    <Button>+</Button>
                                </div>
                                <Button>
                                    <RiDeleteBin5Line />
                                </Button> 
                            </div>
                            )
                        }
                           
                        </div>

                        {/* button für like und unlike und herzicon */}
                        <div className="likeIcon">
                            <div>
                                <button>
                                    <BiLike />
                                </button>
                            </div>

                            <div>
                                <button>
                                    {favorite.includes(item.id)?(<AiFillHeart onClick={()=>addFav(item.id)} style={{color:"red"}}  />):(
                                        <FiHeart onClick={()=>addFav(item.id)} style={{color:"gray"}} />
                                    )}
                                </button>
                                <button
                                    onClick={(event) => {
                                        event.preventDefault();
                                    }}
                                ></button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};
export default ProductCard;
