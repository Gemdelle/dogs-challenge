/* eslint-disable prettier/prettier */
import * as React from 'react';

import './photo.css';
import { useState } from 'react';

export default function Photo({ photoUrl, like }) {
  const [isLiked, setIsLiked] = useState(like);

  function likePic() {
    setIsLiked(!isLiked);
  }

  return (
    <div
      className="a-photo"
      onClick={likePic}
      style={{
        backgroundImage: 'url("' + photoUrl + '")',
      }}
    >
      <div className={'like-logo ' + (isLiked ? 'liked' : 'not-liked')}></div>
    </div>
  );
}
