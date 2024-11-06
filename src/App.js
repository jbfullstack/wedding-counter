import React, { useState, useEffect } from "react";

import "./App.css";

import Photo1 from "./images/photo1.jpg";
import Photo2 from "./images/photo2.jpg";
import Photo3 from "./images/photo3.jpg";
import Photo4 from "./images/photo4.jpg";
import Photo5 from "./images/photo5.jpg";

function App() {
  const weddingDate = new Date("2024-10-19T13:00:00");
  const [timeSinceWedding, setTimeSinceWedding] = useState({});
  const [currentSentence, setCurrentSentence] = useState("");

  const sentences = [
    "May your love grow stronger each and every passing year.",
    "Wishing you a lifetime of love and happiness.",
    "Cheers to the newlyweds and their everlasting love.",
    "Your journey together is just beginning.",
    "May your marriage be filled with joy and laughter.",
    "Here’s to love, laughter, and happily ever after.",
    "Congratulations on your wedding!",
    "May the years ahead be filled with lasting joy.",
    "Best wishes on this wonderful journey.",
    "Thank you for letting us share in your special day.",
  ];

  useEffect(() => {
    changeSentence(); // Set an initial sentence
    const sentenceInterval = setInterval(() => {
      changeSentence();
    }, 10000); // Change every 10 seconds

    return () => clearInterval(sentenceInterval);
  }, []);

  useEffect(() => {
    updateTimeSinceWedding(); // Initial call to set the state
    const interval = setInterval(() => {
      updateTimeSinceWedding();
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const changeSentence = () => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    setCurrentSentence(sentences[randomIndex]);
  };

  const updateTimeSinceWedding = () => {
    const now = new Date();
    let diff = Math.abs(now - weddingDate);

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * (1000 * 60 * 60 * 24 * 365);

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= months * (1000 * 60 * 60 * 24 * 30);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    setTimeSinceWedding({ years, months, days, hours, minutes, seconds });
  };

  return (
    <div className="App">
      <h1>Happy Times Since Your Wedding!</h1>
      <div className="counter">
        <p>{timeSinceWedding.years} Years</p>
        <p>{timeSinceWedding.months} Months</p>
        <p>{timeSinceWedding.days} Days</p>
        <p>{timeSinceWedding.hours} Hours</p>
        <p>{timeSinceWedding.minutes} Minutes</p>
        <p>{timeSinceWedding.seconds} Seconds</p>
      </div>
      <div className="images-grid">
        <img src={Photo1} alt="La belle photo" />
        <img src={Photo2} alt="La plus belle photo" />
        <img src={Photo3} alt="Woow quelle est belle cette photo" />
        <img src={Photo4} alt="Celle ci est vraiment mieux !" />
        <img src={Photo5} alt="Omg ça ne s'arrête pas !! :D " />
      </div>
      <div className="sentence">
        <p>{currentSentence}</p>
      </div>
    </div>
  );
}

export default App;
