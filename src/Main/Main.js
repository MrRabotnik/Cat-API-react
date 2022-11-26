import React from "react";

import CatImage from "../CatImage/CatImage";

import "./main.scss";

function Main({ catImages, callMoreCats }) {
  return (
    <main>
      <div className="catImagesContainer">
        {catImages.length &&
          catImages.map((img, index) => {
            return <CatImage key={index} img={img} />;
          })}
      </div>

      <button onClick={callMoreCats}>Load more</button>
    </main>
  );
}

export default Main;
