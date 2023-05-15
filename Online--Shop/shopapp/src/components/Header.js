import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { FiHeart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";

function Header() {
    const {setSearchInput,searchInput} =useContext(FavoriteContext)

    return (
        <Navbar sticky="top" bg="black">
            <Container >
                <div
                    className="icons"
                    style={{
                        color: "gray",
                        marginLeft: "5px",
                        fontSize: "20px",
                    }}
                >
                    <BiUser />
                </div>

                <section
                    style={{
                        fontSize: "20px",
                        color: "coral",
                        fontWeight: 900,
                        letterSpacing: "-4px",
                        wordSpacing: "4px",
                        textShadow: "1px 1px 2px rgba(255, 200, 0, 0.801)",
                    }}
                    href="#"
                >
                    Rayan Shop
                </section>

                <input
                    value={searchInput}
                    type="search"
                    placeholder="Search"
                    className="searchInput"
                    aria-label="Search"
                    onChange={(e)=> setSearchInput(e.target.value)}
                />

                <div></div>
                <div className="link">
                    <Link to="/favoriteproduct" >

                    <FiHeart />
                    </Link>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;
