import React from "react";
import "./Pages.css";
import planet from "../assets/ezgif.com-crop.mp4";
import data from "../api/projectTravel.json";

export const Gallery = () => {
  const images = data.users.map((user) => user.images1);

  // Function to shuffle images randomly
  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex,
      tempValue;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }

    return array;
  };

  // Shuffle the images
  const shuffledImages = shuffleArray(images);

  return (
    <section className="planetEarth">
      <video playsInline autoPlay muted loop src={planet} type="video/mp4" />
      <div className="sectionGallery">
        <div className="mainGallery">
          <div className="homeGallery">Gallery</div>
          <div className="gallery">
            {/*Map the scrambled images and create image elements for each one */}
            {shuffledImages.slice(0, 9).map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
        <img className="sectionChild" alt="" src="/frame-2@2x.png" />
      </div>
    </section>
  );
};
