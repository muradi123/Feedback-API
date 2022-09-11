import React from "react";
import { FeedBackProvider } from "./context/FeedBackCotext";
import FeebBackStats from "./components/FeebackStats/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm/FeedBackForm";
import FeedBackList from "./components/FeedBackList/FeedBackList";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <FeedBackProvider>
      <Header />
      <FeedBackForm />
      <FeebBackStats />
      <FeedBackList />
    </FeedBackProvider>
  );
};

export default App;
