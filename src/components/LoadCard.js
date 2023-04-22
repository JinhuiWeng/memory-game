import DisplayCard from "./DisplayCard";
import React, { useState, useEffect } from "react";
import rat from "../images/rat.png";
import ox from "../images/ox.png";
import tiger from "../images/tiger.png";
import rabbit from "../images/rabbit.png";
import dragon from "../images/dragon.png";
import snake from "../images/snake.png";
import horse from "../images/horse.png";
import goat from "../images/goat.png";
import monkey from "../images/monkey.png";
import rooster from "../images/rooster.png";
import dog from "../images/dog.png";
import pig from "../images/pig.png";

const LoadCard = (props) => {
  const { handleCardOnClick, currentScore } = props;
  const source = [
    {
      src: rat,
      alt: "rat",
    },
    {
      src: ox,
      alt: "ox",
    },
    {
      src: tiger,
      alt: "tiger",
    },
    {
      src: rabbit,
      alt: "rabbit",
    },
    {
      src: dragon,
      alt: "dragon",
    },
    {
      src: snake,
      alt: "snake",
    },
    {
      src: horse,
      alt: "horse",
    },
    {
      src: goat,
      alt: "goat",
    },
    {
      src: monkey,
      alt: "monkey",
    },
    {
      src: rooster,
      alt: "rooster",
    },
    {
      src: dog,
      alt: "dog",
    },
    {
      src: pig,
      alt: "pig",
    },
  ];

  const [cards, setCards] = useState(source);

  //The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
  const shuffleCard = (randomCards) => {
    let currentIndex = randomCards.length,
      randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [randomCards[currentIndex], randomCards[randomIndex]] = [
        randomCards[randomIndex],
        randomCards[currentIndex],
      ];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffleCard(newCards);
    setCards(newCards);
  }, [currentScore]);

  return (
    <div className="grid grid--1x4">
      {cards.map((card) => (
        <DisplayCard
          key={card.alt}
          alt={card.alt}
          src={card.src}
          handleCardOnClick={handleCardOnClick}
        />
      ))}
    </div>
  );
};

export default LoadCard;
