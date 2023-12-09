import React from 'react'
import "./FavCard.css"

function FavCard({id, name, status, species, image, favCharacters}) {

    console.log(id)
  return (
    <div className="card">
      <img src={image} />

      <div className="card-body">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h3 >{name}</h3>
        <p>{species}</p>
        </div>
      </div>
    </div>
  )
}

export default FavCard