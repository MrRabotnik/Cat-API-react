import React from 'react';

import './catImage.scss'

function CatImage({img}) {
  return (
    <div className='catImageContainer'>
        <img src={img.url} />
    </div>
  );
}

export default CatImage;
