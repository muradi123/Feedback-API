import { createContext, useState, useEffect } from "react";
import axios from "axios";

const FeedBackCotext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedBack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false,
  });

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/feedback");
    setFeedBack(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/feedback/${id}`);
    if (window.confirm("are you sure to delete this item ? ")) {
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };

  const updateFeedBack = async (id, updItem) => {
    let rate = updItem.rate;
    let text = updItem.text;
    const res = await axios.put(`http://localhost:5000/feedback/${id}`, {
      rate,
      text,
    });

    text = res.data.text;
    rate = res.data.rate;

    const updatedObject = {
      rate,
      text,
    };

    setFeedBack(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedObject } : item
      )
    );
  };

  const editFeedBack = (item, bolean) => {
    setFeedBackEdit({
      item,
      edit: bolean,
    });
  };

  const addFeedBack = async (newFeedback) => {
    const rate = newFeedback.rate;
    const text = newFeedback.text;
    const res = await axios.post("http://localhost:5000/feedback", {
      rate,
      text,
    });

    setFeedBack((prev) => [res.data, ...prev]);
  };

  return (
    <FeedBackCotext.Provider
      value={{
        feedback,
        handleDelete,
        isLoading,
        addFeedBack,
        editFeedBack,
        feedbackEdit,
        updateFeedBack,
      }}
    >
      {children}
    </FeedBackCotext.Provider>
  );
};

export default FeedBackCotext;
