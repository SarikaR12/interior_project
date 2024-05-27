import React from 'react'

const Team = ({img, name, desc}) => {
  return (
    <div>
      <div className="Team-data">
        <div className="Team-img">
          <img src={img} alt="" />
        </div>
        <div className="Team-info pt-3">
          <span>{name}</span>
        </div>
        <div className="Team-desc">
          <p className='mb-3'>{desc}</p>
        </div>
      </div>

    </div>
  )
}

export default Team;
