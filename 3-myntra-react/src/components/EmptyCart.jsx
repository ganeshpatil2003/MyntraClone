import React from 'react'
import { useNavigate } from "react-router-dom";
const EmptyCart = () => {
    const navigate = useNavigate();
    const handelBtn = () => {
        navigate('/')
    }
  return (
    <center className="px-3 empty-cart">
    <h1>Cart is Empty.</h1>
    <button className="btn-place-order-2">
    <div className="css-xjhrni"onClick={handelBtn}>ADD ITEMS</div>
  </button>
  </center>

  )
}

export default EmptyCart