import React, { useState, useEffect } from "react";
import "./FeedBackForm.css";
import Card from "../shared/Card/Card";
import Button from "../shared/Button/Button";
import RatingSelect from "../RatingSelect/RatingSelect";
import { useContext } from "react";
import FeedBackCotext from "../../context/FeedBackCotext";

const FeedBackForm = () => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { addFeedBack, feedbackEdit, updateFeedBack, editFeedBack } =
    useContext(FeedBackCotext);

  const [rate, setRating] = useState(0);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setMessage("text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = { rate, text };
      if (feedbackEdit.edit === true) {
        updateFeedBack(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedBack(newFeedback);
      }
      setText("");
      editFeedBack(feedbackEdit.item, false);
    }
  };

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rate);
    }
  }, [feedbackEdit]);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h4>How would you rate our services ?</h4>
        <RatingSelect selected={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            className='form-input'
            type='text'
            value={text}
            onChange={handleTextChange}
            placeholder='Write a review'
          />
          <Button type='submit' isDisabled={btnDisabled} onClick={handleSubmit}>
            send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedBackForm;
