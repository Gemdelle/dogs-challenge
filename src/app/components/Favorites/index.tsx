/* eslint-disable prettier/prettier */
import * as React from 'react';
import Photo from '../Photo';
import './favorites.css';

export default function Favorites({ favoriteDogs, setFavoriteDogs }) {
  return (
    <div>
      <section>
        <div className="favorites-title">
          <h1>Favorites</h1>
          <div className="logo-like"></div>
        </div>
        <div className="photo-container">
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
