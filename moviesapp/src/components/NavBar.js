import React,{useState} from "react";
import { Container, Col, Row } from "react-bootstrap";
import {AiOutlineSearch } from "react-icons/ai";


import logo from '../imgaes/logo.png'


const NavBar = ({ search }) => {
const [searchWord,setSearchWord]=useState("")
  const onSearch = () => {
    search(searchWord)
    // setSearchWord('') // wenn wir auf search icon clicken dann löcht die word suchen
  }
  const onSearches = (word) => {
    search(word)
  }
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              {/* <button onClick={onSearch} > */}
                <AiOutlineSearch  onClick={onSearch} className="fa fa-search"/>
              <input onChange={(e) => setSearchWord(e.target.value)} type="text" value={searchWord} className="form-control" placeholder="Search mit icon klicken" />
              <input onChange={(e) => onSearches(e.target.value)} type="text" className="form-control" placeholder="Search ohne icon klicken" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;