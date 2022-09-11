import React from "react";
import Card from "../shared/Card/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedBackCotext from "../../context/FeedBackCotext";
import "./FeedBackStyles.css";

const FeedBackItem = ({ item }) => {
  const { handleDelete, editFeedBack } = useContext(FeedBackCotext);

  return (
    <Card reverse={false}>
      <div className='card-inner'>
        <div className='rate-number'>{item.rate}</div>
        <button className='edit' onClick={() => editFeedBack(item, true)}>
          <FaEdit color='purple' />
        </button>
        <button className='close' onClick={() => handleDelete(item.id)}>
          <FaTimes color='purple' />
        </button>
        <div className='card-text'>{item.text}</div>
      </div>
    </Card>
  );
};

export default FeedBackItem;
