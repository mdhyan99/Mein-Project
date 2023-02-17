import React from "react";
import Button from "../Button/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { TbPhoneCall } from "react-icons/tb";
import { BiMailSend } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

// import FavoriteProdukt from "../FavoriteProdukt";

import "./Haeder.css";
import IconButten from "../IconButten";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img
                        src="https://www.designevo.com/res/templates/thumb_small/rhombus-forest-and-tent.webp"
                        style={{
                            height: "50px",
                            borderRadius: "50px",
                            marginRight: "50px",
                        }}
                        alt="logo"
                    />
                

                   <Navbar.Brand ><Link className="link" to="/"> Home</Link></Navbar.Brand>
                    <Nav className="me-auto">
                       <Link className="link nav-link"  to="/foto"> Foto</Link>
                        <Link className="link nav-link" to="/video"> Video</Link>
                        <Link className="link nav-link" to="/about"> About</Link>
                    </Nav> 
                    <Button
                        onClick={() => console.log("Hallo2")}
                        label="Login"
                        // label={<>Login </>}
                        // label={<>Login <AiOutlineSearch /></>}
                    ></Button>
                   <Link to={"/warenkorp"}>  <button className="cart" bg="dark" ><BsCartCheck /></button></Link>
                </Container>
            </Navbar>
            <Navbar bg="light" variant="dark">
                <Container>
                    <select className="selc">
                        <option>Englisch</option>
                        <option>Deutsch</option>
                        <option>Arabisch</option>
                    </select>
      
              
            <div><IconButten   icon={<AiOutlineSearch />}></IconButten> <input type="t
             ext" placeholder="suchen"  /></div>
                </Container>
                <div>
                    <a className="kont" href="tel:0123456789">
                        <TbPhoneCall />
                    </a>
                </div>
                <div>
                    <a className="kont" href="mailto:rayan@example.de">
                        <BiMailSend />
                        

                    </a>
                </div>
                <div >
                    <Link className="kont" to="/favoriteprodukt" >

                <BsHeart />
                    </Link>
                </div>
            </Navbar>
        </>
    );
};
export default Header;
