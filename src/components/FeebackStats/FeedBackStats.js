import React from "react";
import "./FeedBackStats.css";
import FeedBackCotext from "../../context/FeedBackCotext";
import { useContext } from "react";

const FeebBackStats = () => {
  const { feedback } = useContext(FeedBackCotext);

  let avarage =
    feedback.reduce((acc, cur) => {
      return acc + cur.rate;
    }, 0) / feedback.length;

  return (
    <div className='feedback-stats'>
      <div>{feedback.length} Reviews</div>
      <div>Avarage Rating : {isNaN(avarage) ? 0 : avarage.toFixed(1)}</div>
    </div>
  );
};

export default FeebBackStats;
