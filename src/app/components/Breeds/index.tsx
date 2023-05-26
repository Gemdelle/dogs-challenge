/* eslint-disable prettier/prettier */
import * as React from 'react';

import Photo from '../Photo';
import './breeds.css';

export default function Breeds({
  searchedDogs,
  setSearchedDogs,
  setFavoriteDogs,
}) {
  return (
    <div>
      <section>
        <div className="breed-title">
          <h1>Breeds</h1>
          <div className="logo"></div>
        </div>

        <select name="" id="searching-bar" placeholder="Search for a breed...">
          <option value=""></option>
        </select>

        <div className="photo-container">
          <Photo
            photoUrl="https://images.dog.ceo/breeds/weimaraner/n02092339_7606.jpg"
            like={false}
          ></Photo>
          <Photo photoUrl="" like={false}></Photo>
          <Photo photoUrl="" like={false}></Photo>
          <Photo photoUrl="" like={false}></Photo>
          <Photo photoUrl="" like={false}></Photo>
          <Photo photoUrl="" like={false}></Photo>
          <Photo photoUrl="" like={false}></Photo>
          <Photo photoUrl="" like={false}></Photo>
          <Photo photoUrl="" like={false}></Photo>
          <Photo photoUrl="" like={false}></Photo>
        </div>
      </section>
    </div>
  );
}
