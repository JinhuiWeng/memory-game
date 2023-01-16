import React from "react";

const DisplayCard = (props) => {
  const { src, alt, handleCardOnClick } = props;
  return (
    <img
      className="cardimg"
      src={src}
      alt={alt}
      onClick={() => handleCardOnClick(alt)}
      role="button"
    />
  );
};

export default DisplayCard;
