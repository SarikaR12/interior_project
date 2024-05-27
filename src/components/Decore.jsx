import React from 'react'
import { Link } from 'react-router-dom'

const Decore = ({ image, name, title }) => {
    return (
        <>

            <div class="card">
                <img src={image} alt="" />
                <p>{title}</p>
                <span className='pb-5'>{name}</span>
            </div>
        </>
    )
}

export default Decore;
