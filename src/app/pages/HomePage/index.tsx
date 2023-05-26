/* eslint-disable prettier/prettier */
import Breeds from 'app/components/Breeds';
import Favorites from 'app/components/Favorites';
import * as React from 'react';

import './styles.css';
import { useState } from 'react';

export default function HomePage() {
  const [searchedDogs, setSearchedDogs] = useState([]);
  const [favoriteDogs, setFavoriteDogs] = useState([]);

  return (
    <div className="container">
      <title>Dogs Challenge</title>
      <meta name="description" content="A Boilerplate application homepage" />
      <Breeds
        searchedDogs={searchedDogs}
        setSearchedDogs={setSearchedDogs}
        setFavoriteDogs={setFavoriteDogs}
      />
      <Favorites
        favoriteDogs={favoriteDogs}
        setFavoriteDogs={setFavoriteDogs}
      />
    </div>
  );
}
