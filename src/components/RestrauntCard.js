import React from "react";
import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
 console.log("prps",props);
  const { name, cuisines, rating, imgId, cost, ETA } = props;
  
  return (
    <div
      className="w-52 h-96 m-4 p-4 rounded-sm"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="res-logo rounded-lg"
        src={CDN_URL + imgId}
        alt="Meghana Foods"
      />
      <h3 className="py-2 font-bold py text-lg">{name}</h3>
      <h4 className="py-2 overflow-x-auto">{cuisines}</h4>
      <h4 className="py-2">{rating}</h4>
      <h4 className="py-2">{cost}</h4>
      <h4 className="py-2">{ETA}</h4>
    </div>
  );
};

export default RestrauntCard;
