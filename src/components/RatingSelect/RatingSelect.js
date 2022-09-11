import React, { useState, useContext, useEffect } from "react";
import FeedBackCotext from "../../context/FeedBackCotext";
import "./RatingSelect.css";

const RatingSelect = ({ selected }) => {
  const [select, setSelected] = useState(0);
  const { feedbackEdit } = useContext(FeedBackCotext);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    selected(+e.currentTarget.value);
  };

  useEffect(() => {
    setSelected(feedbackEdit.item.rate);
  }, [feedbackEdit]);

  return (
    <ul className='rating'>
      <li>
        <input
          type='radio'
          id='num1'
          value={1}
          name='rating'
          onChange={handleChange}
          checked={select === 1}
        />
        <label htmlFor='num1'>1</label>
      </li>
      <li>
        <input
          type='radio'
          id='num2'
          value={2}
          name='rating'
          onChange={handleChange}
          checked={select === 2}
        />
        <label htmlFor='num2'>2</label>
      </li>
      <li>
        <input
          type='radio'
          id='num3'
          value={3}
          name='rating'
          onChange={handleChange}
          checked={select === 3}
        />
        <label htmlFor='num3'>3</label>
      </li>
      <li>
        <input
          type='radio'
          id='num4'
          value={4}
          name='rating'
          onChange={handleChange}
          checked={select === 4}
        />
        <label htmlFor='num4'>4</label>
      </li>
      <li>
        <input
          type='radio'
          id='num5'
          value={5}
          name='rating'
          onChange={handleChange}
          checked={select === 5}
        />
        <label htmlFor='num5'>5</label>
      </li>
      <li>
        <input
          type='radio'
          id='num6'
          value={6}
          name='rating'
          onChange={handleChange}
          checked={select === 6}
        />
        <label htmlFor='num6'>6</label>
      </li>
      <li>
        <input
          type='radio'
          id='num7'
          value={7}
          name='rating'
          onChange={handleChange}
          checked={select === 7}
        />
        <label htmlFor='num7'>7</label>
      </li>
      <li>
        <input
          type='radio'
          id='num8'
          value={8}
          name='rating'
          onChange={handleChange}
          checked={select === 8}
        />
        <label htmlFor='num8'>8</label>
      </li>
      <li>
        <input
          type='radio'
          id='num9'
          value={9}
          name='rating'
          onChange={handleChange}
          checked={select === 9}
        />
        <label htmlFor='num9'>9</label>
      </li>
      <li>
        <input
          type='radio'
          id='num10'
          value={10}
          name='rating'
          onChange={handleChange}
          checked={select === 10}
        />
        <label htmlFor='num10'>10</label>
      </li>
    </ul>
  );
};

export default RatingSelect;
