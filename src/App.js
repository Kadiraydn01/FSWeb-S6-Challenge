import React, { useState, useEffect } from "react";
import axios from "axios";

const HeroList = () => {
  const [heroes, setHeroes] = useState([]);
  const [selectedHero, setSelectedHero] = useState(null);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        setHeroes(response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  const handleHeroClick = (hero) => {
    setSelectedHero(hero);
  };

  return (
    <div className="container">
      <h1>Kahramanlar Vs Ben</h1>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id} onClick={() => handleHeroClick(hero)}>
            {hero.name}
          </li>
        ))}
      </ul>
      {selectedHero && <HeroDetails hero={selectedHero} />}
    </div>
  );
};

const HeroDetails = ({ hero }) => {
  return (
    <div className="hero-details">
      <h2>{hero.name}</h2>
      <p>Gender: {hero.gender}</p>
      <p>Height: {hero.height}</p>
      <p>Mass: {hero.mass}</p>
      <p>BirthYear: {hero.birth_year}</p>
      <p>Eye Color: {hero.eye_color}</p>
      <p>Hair Color: {hero.hair_color}</p>
      <p>Skin Color: {hero.skin_color}</p>
    </div>
  );
};

export default HeroList;
