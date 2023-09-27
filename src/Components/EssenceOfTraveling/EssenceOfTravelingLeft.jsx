import { memo } from "react";
import './EssenceOfTravelingLeft.scss'; // Importe o arquivo SCSS

const EssenceOfTravelingLeft = memo(({ image, statement, title, sentences }) => {
  return (
    <div className="leftContainer">
      <img className="imageIconLeft" alt="" src={image} />
      <div className="text">
        <div className="frame">
          <div className="frameChild" />
          <div className="senses">{statement}</div>
        </div>
        <div className="frame1">
          <div className="cultureAndFlavors">{title}</div>
          <div className="theCuisineReflectsContainer">
            {sentences.map((sentence, index) => (
              <p className="blankLine" key={index}>
                {sentence}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default EssenceOfTravelingLeft;





