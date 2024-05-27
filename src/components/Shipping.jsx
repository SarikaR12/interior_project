import React from 'react'

const Shipping = ({ image, name, desc }) => {
  return (
    <div>
      <div className="shipping-data">
        <div className="shipping-text">
          <div className="shipping-img">
            <img src={image} alt="" />
          </div>
          <div className="shipping-info pt-3">
            <span>{name}</span>
          </div>
          <div className="shipping-desc">
            <p className='mb-3'>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shipping;
