import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import FavoriteContext from '../context/FavoriteContext'
import data from '../data/Products.json'
import ProductCard from './ProductCard'
const FavoriteProduct = () => {
    const {favorite} =useContext(FavoriteContext)
    const data_Fav = data.filter((item)=> favorite.includes(item.id))

  return (
        <>
        <h1 className='title_h1'>Favorite Product</h1>
    <div className="  favorite-product">
      <Row  md={2} xs={2} lg={2} className=" ">
{ data_Fav.map((item)=>{
  return(
    <div>
        <Col key={item.id}>
        <ProductCard item={item} />
        
        </Col>
    </div>
    )
  })}
  </Row>

    </div></>
  )
}

export default FavoriteProduct