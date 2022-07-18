import React from 'react';

function ImageUrl({image}) {
    const baseUrl = "http://localhost:1337"

  return (
    <img src={baseUrl + image} alt="" />
  );
}

export default ImageUrl;