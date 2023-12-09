import "./Characters.css"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharacterCard from "../../Character/CharacterCard";
import Pagination from "../../Pagination";

function Characters({setCurrentURL, favCharacters, setFavCharacters}) {
  setCurrentURL(window.location.href);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleFavButton = (id) => {
    setFavCharacters([...favCharacters, id])
    
    console.log(favCharacters, id)
  }

  useEffect(() => {
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;

    axios.get(apiUrl)
      .then(response => {
        setData(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [currentPage]);

  console.log(favCharacters)
  return (
    <div className="characters-main">
        <h1>Characters</h1>
        <div className="characters">
            {data && data?.map(item => (
                    <CharacterCard
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
                        setFavCharacters={setFavCharacters} 
                        handleFavButton={handleFavButton} 
                    />
            ))}
        </div>
        <div className="pagination">
          <Pagination onNext={handleNextPage} onPrev={handlePrevPage} currentPage={currentPage}/>
        </div>
    </div>
  );
}

export default Characters;
