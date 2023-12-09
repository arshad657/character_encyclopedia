import React, { useEffect, useState } from 'react'
import './Favorites.css'
import axios from 'axios';
import FavCard from './FavCard/FavCard';

function Favorites({ setCurrentURL, favCharacters}) {
  setCurrentURL(window.location.href);
  const [favChararacterData, setFavCharacterData] = useState([])

  useEffect(() => {
    const apiUrl = `https://rickandmortyapi.com/api/character`;

    axios.get(apiUrl)
      .then(response => {
        setFavCharacterData(response.data.results.filter(data => favCharacters.includes(data.id)));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(favChararacterData)
  return (
    <div className='fav-main'>
      <h1>Favorites</h1>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {favChararacterData.map(item => (
        <FavCard
          id={item.id} 
          name={item.name} 
          status={item.status} 
          species= {item.species} 
          gender={item.gender}
          origin={item.origin}
          location={item.location}
          image={item.image}
          episodes={item.episode}
          favCharacters={favCharacters}
        />
      ))}
      </div>
    </div>
  )
}

export default Favorites