import React from 'react'
import {useSelector} from 'react-redux'

const BagSummary = () => {
    const bagItems = useSelector(store => store.bagItem)
    const items = useSelector(store => store.items)
    let  totalItem = bagItems.length;
    let  totalDiscount = 0;
    let totalMRP = 0;
    let finalPayment = 0;
    const finalItems = items.filter(({id}) => bagItems.indexOf(id) >= 0)

    finalItems.forEach(item => {
      totalMRP += item.original_price
      totalDiscount += (item.original_price - item.current_price)
    });
    finalPayment = totalMRP - totalDiscount + 99
  return (
   <>
   <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
   </>
  )
}

export default BagSummary