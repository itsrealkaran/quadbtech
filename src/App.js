import React, { useState, useEffect } from "react";
import "./App.css";
import ShowSummary from "./components/ShowSummary";
import ShowList from "./components/ShowList";

function App() {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const showSummary = (showId) => {
    setSelectedShow(shows.find((show) => show.show.id === showId));
  };

  const goBackToList = () => {
    setSelectedShow(null);
  };

  return (
    <div className="App">
      <header>
        <h2>QuadB Tech</h2>
      </header>

      {selectedShow ? (
        <ShowSummary show={selectedShow} goBackToList={goBackToList} />
      ) : (
        <ShowList shows={shows} showSummary={showSummary} />
      )}
    </div>
  );
}

export default App;
