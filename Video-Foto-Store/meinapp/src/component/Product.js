import React ,{useContext} from "react";
import Card from "react-bootstrap/Card";
import { BsHeart } from "react-icons/bs";
import { BiLike } from "react-icons/bi";

import VideoIframe from "./Video/VideoIframe";
import FavoritContext from "../contexts/FavoritContext";

const Product = ({id,  title, url, imag ,category,product  }) => {


    const { favorite,addFav,removeFav}= useContext(FavoritContext)
    console.log(favorite);
    return (
        
                <Card>
      
            {
    category==="foto" ?(<Card.Img style={{ height: "250px" }} variant="top" src={imag} /> ):( 
                <VideoIframe title={title} url ={url}/>
                
            )
            }
          
       

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
                <div className="icon">
                    <button
                    // onClick={()=> addToCart(product)}
                    className="">in den Warenkorb</button>
                    <BsHeart onClick={()=> addFav(id)} />
                    <BiLike onClick={()=> removeFav(id)} />
                </div>
            </Card.Body>
        </Card>
        
    );
};

export default Product;
