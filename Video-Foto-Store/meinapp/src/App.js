import React, { useState, useContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/Header/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import VideoList from "./component/Video/VideoList";
import Foto from "./component/Foto";
import About from "./component/About";
import Product from "./component/Product";
import FavoriteProdukt from "./component/FavoriteProdukt";
import data from "./data/data.json";

import {FavoritProvider}  from './contexts/FavoritContext'


function App() {
    return (
            <FavoritProvider>

            
            <div>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/foto" element={<Foto />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/video" element={<VideoList />} />
                        <Route path="/footer" element={<Footer />} />
                        <Route path="/product" element={<Product />} />
                        <Route
                            path="/favoriteprodukt"
                            element={<FavoriteProdukt />}
                        />
                    </Routes>
                    {/* <Cards /> */}
                </BrowserRouter>
                {/* <Button
                className="btn1 "
                onClick={() => console.log("Hallo1")}
                label="button1"
            ></Button>
            {/* hier wir haben onClick und className und label von Button.js importieren */}
                {/* <Button
                onClick={() => console.log("Hallo2")}
                label="button2"
            ></Button>
            <Button onClick={dd} label="button3"></Button>
            <Button
                className="btn4 "
                onClick={handelClick}
                label="button4"
            ></Button> */}
            </div>
            </FavoritProvider>
    );
}

export default App;


