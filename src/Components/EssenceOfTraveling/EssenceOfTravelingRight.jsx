import { memo } from "react";
import "./EssenceOfTraveling.scss";

const EssenceOfTravelingRight = memo(
  ({ image, statement, title, sentences }) => {
    return (
      <div className="cardContainer">
        <div className="text">
          <div className="frame">
            <div className="frameChild" />
            <div className="senses">{statement}</div>
          </div>
          <div className="frame1">
            <div className="title">{title}</div>
            <div className="paragraphContainer">
              {sentences.map((sentence, index) => (
                <p className="paragraph" key={index}>
                  {sentence}
                </p>
              ))}
            </div>
          </div>
        </div>
        <img className="imageIcon" src={image} />
      </div>
    );
  }
);

export default EssenceOfTravelingRight;
