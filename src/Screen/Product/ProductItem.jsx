import React from 'react'
import { NavLink } from 'react-router-dom'
import useCart from '../../CustomHook/Cart'

function ProductItem(props) {
    const { addToCart } = useCart()
    let { id, title, image, category, description, price, rating} = props

  return (
    <div className="card">
        <NavLink to={`/product/${id}`} style={{ textDecoration: 'none'}}>
            <div className="card-front">
                <img src={image?image: ''} alt="" className="card-img" />
                <div className="card-content">
                    <div className="title-sec">
                        <h4 className="card-title"> {title} </h4>
                        <p className="price"> &#8377; {price} </p>
                        <p className="category"> { category } </p>
                    </div>
                </div>
            </div>
        </NavLink>

        <div className="card-back">
             <button onClick={() => addToCart(props)} className="btn"> Add to Cart
                <i className="bi bi-cart"></i> </button>
        </div>
    </div>
  )
}

export default ProductItem