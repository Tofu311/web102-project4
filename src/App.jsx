import { useState } from "react";
import "./App.css";
import Discover from "./components/Discover";
import HistoryList from "./components/HistoryList";
import BanList from "./components/BanList";

const API_KEY = import.meta.env.CAT_API_KEY;

function App() {
  const [history, setHistory] = useState([]); // Represents cats that we've seen
  const [banList, setBanList] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);

  const getImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-api-key": API_KEY,
        },
      });

      if (!response.ok) throw new Error(`Response status: ${response.status}`);

      const result = await response.json();

      // Currently log to the console for debugging purposes, remove later
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1>Cat Tinder</h1>
      <h3>Find your new non-human child</h3>
      😻
      <Discover getImage={getImage} />
      <HistoryList />
      <BanList />
    </>
  );
}

export default App;
