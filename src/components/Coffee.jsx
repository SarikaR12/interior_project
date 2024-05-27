import React from 'react'

const Coffee = ({image,name,desc,rupee}) => {
    return (
        <>
            <div className="coffee-info">
                <div className="coffee-img">
                    <img src={image} alt="" />
                </div>
                <div className="coffee-content">
                    <h5>{name}</h5>
                    <p>{desc}</p>
                </div>
                <div className="coffee-rupee">
                    <span>{rupee}</span>
                </div>
            </div>
        </>
    )
}

export default Coffee;
