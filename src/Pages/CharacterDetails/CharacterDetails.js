import axios from 'axios';
import './CharacterDetails.css'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function CharacterDetails() {
    const params = useParams();
    const characterId = params.id;
    const [details, setDetails] = useState({})
    const { name, status, species, gender, origin, location, image, episode } = details;

  useEffect(() => {
    const apiUrl = `https://rickandmortyapi.com/api/character/${characterId}`;

    axios.get(apiUrl)
      .then(response => {
        setDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="character-detail-container">
      <div className="character-image">
        <img src={image} alt={name} />
      </div>
      <div className="character-info">
        <h2>{name}</h2>
        <p>Location: {location?.name}</p>
        <p>Origin: {origin?.name}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Status: {status}</p>
        <div className="episode-list">
          Episodes: {episode?.length}
            ({episode?.map((episode, index) => (
              <span key={index}>{parseInt(episode.match(/(\d+)$/)[0])}, </span>
            ))})
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;
