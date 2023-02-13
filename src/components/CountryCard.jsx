import React from "react";

function CountryCard({ name, image }) {
  return (
    <div className="countryCard">
      <p>{name}</p>
      <div className="imageDiv">
        <img className="image" src={image} alt="" />
      </div>
    </div>
  );
}

export default CountryCard;
