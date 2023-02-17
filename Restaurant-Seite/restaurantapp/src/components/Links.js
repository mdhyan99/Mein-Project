import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div bg="dark" variant="dark" className=" all-link">
                <Link className="link" to="/">
                    <div>All</div>
                </Link>
                <Link className="link" to="/pizza">
                    <div>Pizza</div>
                </Link>
                <Link className="link" to="/shawrma">
                    <div>Shawrma</div>
                </Link>
                <Link className="link" to="/donner">
                    <div>Dönner</div>
                </Link>
                <Link className="link" to="/salat">
                    <div>Salat</div>
                </Link>
                <Link className="link" to="/getranke">
                    <div>Getränke</div>
                </Link>
            </div>
  )
}

export default Links