import React from 'react'

const Items = ({ img, name, desc, rupee }) => {
  return (
    <div>
      <div className="items-data">
        <div className="items-img">
          <img src={img} alt="" />
        </div>
        <div className="items-info pt-3">
          <span>{name}</span>
        </div>
        <div className="items-price d-flex">
          <p className='mb-3'>{desc}</p>
          <h5>${rupee}</h5>
        </div>
      </div>

    </div>
  )
}

export default Items
