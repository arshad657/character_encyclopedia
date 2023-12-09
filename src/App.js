import './App.css';
import CharacterDetails from './Pages/CharacterDetails/CharacterDetails';
import Characters from './Pages/Characters/Characters';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Favorites from './Pages/Favorites/Favorites';
import { useState } from 'react';


function App() {
  const [currentURL, setCurrentURL] = useState(window.location.href);
  const [favCharacters, setFavCharacters] = useState([]);
  
  
  return (
    <Router>
      <Header currentURL={currentURL}/>

      <Routes>
        <Route path="/" exact element={<Characters currentURL={currentURL} setCurrentURL={setCurrentURL} favCharacters={favCharacters}  setFavCharacters={setFavCharacters}/>} />
        <Route path="/character/:id" exact element={<CharacterDetails/>} />
        <Route path="/favorites" exact element={<Favorites favCharacters={favCharacters} currentURL={currentURL} setCurrentURL={setCurrentURL}/>} />
      </Routes>
    </Router>
  );
}

export default App;
