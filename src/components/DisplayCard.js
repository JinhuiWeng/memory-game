import React from "react"; 

const DisplayCard = (props) => {
    const {src, alt} = props;
    return (
        <img className="cardimg"
        src={src}
        alt={alt}
        onClick="window.open(this.src)"
        role="button"
      />
    )
}

export default DisplayCard;