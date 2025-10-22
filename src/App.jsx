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
  const [attributes, setAttributes] = useState({});

  // Toggle an attribute on the ban list. If already present remove it, otherwise add it.
  const toggleBan = (attributeValue) => {
    setBanList((prev) => {
      if (prev.includes(attributeValue)) {
        return prev.filter((v) => v !== attributeValue);
      }
      return [...prev, attributeValue];
    });
  };

  const getImage = async () => {
    const baseUrl =
      "https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1";

    // Try fetching images until we get one that doesn't contain any banned attribute.
    const MAX_ATTEMPTS = 10;
    let attempt = 0;

    while (attempt < MAX_ATTEMPTS) {
      attempt += 1;
      try {
        const response = await fetch(baseUrl, {
          method: "GET",
          headers: { "x-api-key": API_KEY },
        });

        if (!response.ok)
          throw new Error(`Response status: ${response.status}`);

        const result = await response.json();
        const item = result[0];
        const img = item.url ?? null;
        const breed = item.breeds[0].name;
        const ageRaw = item.breeds[0].life_span;
        const weightRaw = item.breeds[0].weight.imperial;
        const origin = item.breeds[0].origin;

        const age = `${ageRaw} years`;
        const weight = `${weightRaw} lbs`;

        const candidateAttributes = [breed, age, weight, origin];

        // If any of the candidate attributes are in the ban list, skip and retry.
        const hasBanned = candidateAttributes.some((attr) => banList.includes(attr));
        if (hasBanned) {
          // If we've reached max attempts, break and still show the last fetched item.
          if (attempt >= MAX_ATTEMPTS) {
            console.warn(
              "Max attempts reached while trying to find a non-banned cat. Showing last result."
            );
          } else {
            // try again
            continue;
          }
        }

  setCurrentImage(img);
  setHistory((prev) => [...prev, img]);
  setAttributes({ breed, age, weight, origin });
        return; // success
      } catch (error) {
        console.error(error.message);
        return;
      }
    }
  };

  return (
    <>
      <h1>Cat Finder</h1>
      <h3>Find your new non-human child</h3>
      😻
      <Discover
        banList={banList}
        toggleBan={toggleBan}
        getImage={getImage}
        currentImage={currentImage}
        attributes={attributes}
      />
      <HistoryList history={history} />
      <BanList banList={banList} toggleBan={toggleBan} />
    </>
  );
}

export default App;
