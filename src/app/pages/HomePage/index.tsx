/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable prettier/prettier */
import Breeds from 'app/components/Breeds';
import Favorites from 'app/components/Favorites';
import * as React from 'react';

import './styles.css';
import { useEffect, useState } from 'react';
import { getAllJSDocTagsOfKind } from 'typescript';

export default function HomePage() {
  const [searchedDogs, setSearchedDogs] = useState([]);
  const [favoriteDogs, setFavoriteDogs] = useState([]);
  const [dogBreeds, setDogBreeds] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(({ message }) => {
        const dogs: any[] = [];
        Object.keys(message).forEach(breed => {
          const subBreeds = message[breed];
          if (subBreeds.length === 0) {
            dogs.push({
              searchOption: breed,
              breed: breed,
              subBreed: null,
            });
          } else {
            message[breed].forEach(subBreed => {
              dogs.push({
                searchOption: subBreed + ' ' + breed,
                breed: breed,
                subBreed: subBreed,
              });
            });
          }
        });
        setDogBreeds(dogs);
      });
  }, []);

  return (
    <div className="container">
      <title>Dogs Challenge</title>
      <meta name="description" content="A Boilerplate application homepage" />
      <Breeds
        searchedDogs={searchedDogs}
        setSearchedDogs={setSearchedDogs}
        setFavoriteDogs={setFavoriteDogs}
        dogBreeds={dogBreeds}
      />
      <Favorites
        favoriteDogs={favoriteDogs}
        setFavoriteDogs={setFavoriteDogs}
      />
    </div>
  );
}
