import React, { useContext } from "react";

import { Col, Row } from "react-bootstrap";

import { items } from "../data";
import ProductCard from "./ProductCard";

import FavoriteContext from "../context/FavoriteContex";

const Category = ({ category }) => {
    const { searchInput } = useContext(FavoriteContext);

    const data_Category = category
        ? items.filter((d) => d.category === category)
        : items;
    // return (

    return searchInput === "" ? (
        <div className="card d-flex justify-content-between g-3 category-top">
            <Row md={1} xs={1} lg={1} className="g-4">
                {/* { category ?
               (<img src={data_Category[0].imgUrl} alt={data_Category.title} />): null} */}
                {/* // Oder */}
                <h1 className="title_h1">{data_Category[0].category}</h1>
                {category && (
                   
                    <img
                        src={data_Category[0].imgUrl}
                        alt={data_Category[0].title}
                    />
                ) }
                {data_Category.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </Row>
        </div>
    ) : (
        // für search  hier zeigt uns was wir suchen in Startseite

       <div className="category-top">
         <Row md={2} xs={1} lg={4} className="g-3 ">
            {items
                .filter((el) =>
                    el.title.toLowerCase().includes(searchInput.toLowerCase())
                )
                .map((item) => {
                    return (
                        <Col key={item.id}>
                            <ProductCard item={item} />
                        </Col>
                    );
                })}
        </Row>
       </div>
    );
};

export default Category;
