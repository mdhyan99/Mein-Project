import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap';
import FavoriteContext from '../context/FavoriteContext';
import data from '../data/Products.json'
import ProductCard from './ProductCard';

const Category = ({ category }) => {
  const {searchInput} =useContext(FavoriteContext)
    const data_Category = category ? data.filter((d) => d.category === category)
    : data;
    return searchInput === "" ?(

   
    <div className='start'>

    <Row md={2} xs={1} lg={4} className="">
        {data_Category.map((item) => (
         <ProductCard key={item.id} item={item} />
        ))}
    </Row>
</div> ):(
        // für search  hier zeigt uns was wir suchen in Startseite

        <Row md={2} xs={1} lg={4} className="g-3">
            {data
                .filter((el) =>
                    el.text.toLowerCase().includes(searchInput.toLowerCase())
                )
                .map((item) => {
                    return (
                        <Col key={item.id}>
                            <ProductCard item={item} />
                        </Col>
                    );
                })}
        </Row>
    );
}

export default Category