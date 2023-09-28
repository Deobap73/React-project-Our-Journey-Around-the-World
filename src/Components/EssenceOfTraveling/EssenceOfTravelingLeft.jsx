import { memo } from "react";
import "./EssenceOfTraveling.scss";

const EssenceOfTravelingLeft = memo(
  ({ image, statement, title, sentences }) => {
    return (
      <div className="cardContainer">
        <img className="imageIcon" src={image} />
        <div className="text">
          <div className="frame">
            <div className="frameChild" />
            <div className="senses">{statement}</div>
          </div>
          <div className="frame1">
            <div className="title">{title}</div>
            <div className="paragraphContainer">
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
  }
);

export default EssenceOfTravelingLeft;
