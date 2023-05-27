/* eslint-disable prettier/prettier */
import * as React from 'react';

import Photo from '../Photo';
import './breeds.css';

export default function Breeds({
  searchedDogs,
  setSearchedDogs,
  setFavoriteDogs,
  dogBreeds,
}) {
  const handleChange = async event => {
    const query = event.currentTarget.value.split(' ').reverse().join('/');
    const response = await fetch(
      'https://dog.ceo/api/breed/' + query + '/images/random/10',
    );
    if (!response.ok) {
      throw new Error('Data coud not be fetched!');
    }
    response.json().then(jsonResponse => {
      const dogs = jsonResponse.message.map(dogUrl => {
        return {
          photoUrl: dogUrl,
          isLiked: false,
        };
      });
      setSearchedDogs(dogs);
    });
  };

  return (
    <div>
      <section>
        <div className="breed-title">
          <h1>Breeds</h1>
          <div className="logo"></div>
        </div>

        <select
          name=""
          id="searching-bar"
          placeholder="Search for a breed..."
          onChange={handleChange}
        >
          {dogBreeds.map(breed => {
            return (
              <option value={breed.searchOption}>{breed.searchOption}</option>
            );
          })}
        </select>

        <div className="photo-container">
          {searchedDogs.map(({ photoUrl, isLiked }) => {
            return <Photo photoUrl={photoUrl} like={isLiked}></Photo>;
          })}
        </div>
      </section>
    </div>
  );
}
