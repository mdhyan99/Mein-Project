import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import WarenKorbContext from "../context/WarenKorbContext";
import { Container } from "react-bootstrap";


const NavBar = () => {
    const { cart, openCart} = useContext(WarenKorbContext);
    return (
        
        <div className="sticky">
            <div className="link1">
                <Link className="link" to="/">
                    <div>All</div>
                </Link>
                <Link className="link" to="/kinder">
                    <div>Kinder</div>
                </Link>
                <Link className="link" to="/herren">
                    <div>Herren</div>
                </Link>

                <Link className="link" to="/frauen">
                    <div>Frauen</div>
                </Link>

                <div>
                    <select>
                        <option>Englisch</option>
                        <option>Deutsch</option>
                        <option>Arabisch</option>
                    </select>
                </div>
                <div>
               <BsCartCheck className="icon-korb" onClick={openCart} />
            
            <span className="span-like">{cart.length}</span> 
            {/* {cart.length} */}
               </div>
            </div>
        </div>
    );
};

export default NavBar;
