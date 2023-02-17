import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Category from "./components/Category";

import { FavoriteProvider } from "./context/FavoriteContex";
import FavoriteProduct from './components/FavoriteProduct'
import ProductCard from "./components/ProductCard";
import WarenKorb from "./components/WarenKorb";
import{ WarenKorbProvider } from "./context/WarenKorbContext";


function App() {
   
    return (
        <FavoriteProvider>
            <WarenKorbProvider>
            <div>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={
                            <>
                            <Category  category="Pizza" />
                            <Category category="Shawrma" />
                            <Category category="Dönner" />
                            <Category category="Salat" />
                            <Category category="Getränke" />
                            </>
                        } />
                     
                        <Route
                            path="/pizza"
                            element={<Category category="Pizza" />}
                        />
                        <Route
                            path="/getranke"
                            element={<Category category="Getränke" />}
                        />
                        <Route
                            path="/shawrma"
                            element={<Category category="Shawrma" />}
                        />
                        <Route
                            path="/salat"
                            element={<Category category="Salat" />}
                        />
                        <Route
                            path="/donner"
                            element={<Category category="Dönner" />}
                        />
                      <Route
                            path="/favoriteproduct"
                            element={<FavoriteProduct  />}
                        />
                         <Route
                            path="/warenkorb"
                            element={<WarenKorb />}
                        />
                         <Route
                            path="/productCard"
                            element={<ProductCard />}
                        />
                    </Routes>
                    {/* <MenuListe  /> */}
                </BrowserRouter>
     
            </div>
            <WarenKorb />

            </WarenKorbProvider>
        </FavoriteProvider>
    );
}

export default App;
