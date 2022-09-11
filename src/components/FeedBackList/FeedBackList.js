import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import React from "react";
import FeedBackItem from "./FeedBackItem";
import FeedBackCotext from "../../context/FeedBackCotext";

const FeedBackList = () => {
  const { feedback, isLoading } = useContext(FeedBackCotext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p className='no-feedback'>No feedback yet</p>;
  }

  return isLoading ? (
    <h3 className='loading-text'>Loading...</h3>
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedBackList;
