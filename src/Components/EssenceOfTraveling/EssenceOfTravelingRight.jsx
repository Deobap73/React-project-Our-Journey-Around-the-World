import { memo } from "react";
import "./EssenceOfTravelingRight.scss";

const EssenceOfTravelingRight = memo(({ image, statement, title, sentences }) => {
  return (
    <div className="rightContainer">
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
          <img className="imageIconRight" alt="" src={image} />
  </div>
  );
});

export default EssenceOfTravelingRight;
