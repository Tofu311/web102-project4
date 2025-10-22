import { useState } from "react";
import "./App.css";
import Discover from "./components/Discover";
import HistoryList from "./components/HistoryList";
import BanList from "./components/BanList";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [history, setHistory] = useState([]); // Represents cats that we've seen
  const [banList, setBanList] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);

  const getImage = async () => {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1';

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-api-key": API_KEY
        },
      });

      if (!response.ok) throw new Error(`Response status: ${response.status}`);

      const result = await response.json();
      console.log(API_KEY);
      console.log(result);
      setCurrentImage(result[0].url ?? null);
      setHistory(prev => [...prev, result[0].url]);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1>Cat Tinder</h1>
      <h3>Find your new non-human child</h3>
      😻
      <Discover getImage={getImage} currentImage={currentImage}/>
      <HistoryList history={history}/>
      <BanList />
    </>
  );
}

export default App;
