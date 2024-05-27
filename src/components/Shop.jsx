import React from 'react'

const Shop = ({ title, name,desc , image }) => {
    return (
        <div className="exe-menu  d-flex">
            
            <div className="exe-right">
                <div className="exe-info">
                    <h6>{title}</h6>
                </div>
                <div className="exe-name">
                    <h2>{name}</h2>
                </div>
                <div className="exe-desc">
                    <p>{desc}</p>
                </div>
            </div>
            <div className="exe-left">
                <div className="exe-img">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Shop;
