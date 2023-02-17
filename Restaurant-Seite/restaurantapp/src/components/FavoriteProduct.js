import React,{useContext} from 'react'
import { Col, Row } from 'react-bootstrap';

import FavoriteContext from '../context/FavoriteContex'
import ProductCard from './ProductCard';
import {items} from '../data'

const FavoriteProduct = () => {
  const {favoritep} =useContext(FavoriteContext)

 const data_ff= items.filter((item)=> favoritep.includes(item.id) )

  return (
    <div className="warenkorb">
    <h1 className='title_h1'>Favorite Product</h1>
    <Row md={1} xs={1} lg={1} className="g-2 ">
        {data_ff.map((item) => (
            <Col key={item.id}>
                <ProductCard  item={item}/>
              
            </Col>
        ))}
    </Row>
</div>
  )
}

export default FavoriteProduct