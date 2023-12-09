import React from 'react'
import "./CharacterCard.css"
import { CiHeart } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import ImageWithStatus from './ImageWithStatus/ImageWithStatus';
import Button from '../Common/Button';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";


function CharacterCard({id, name, status, species, image, handleFavButton,favCharacters, setFavCharacters}) {
  const navigate = useNavigate()

  return (
    <div className="card">
      <ImageWithStatus imageUrl={image} statusText={status}/>
      <div className="card-body">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h3 >{name}</h3>
        <p>{species}</p>
        </div>
        <div className='footer'>
          <Button label='See Details' onClick={() => navigate(`character/${id}`)}/>
          {favCharacters.includes(id) ?
          <FaHeart fontSize="30px" color='red' cursor='pointer'/> :  
          <CiHeart fontSize="40px" color='red' cursor='pointer' onClick={() => setFavCharacters([...favCharacters, id])}/>
          }
        </div>
      </div>
    </div>
  )
}

export default CharacterCard