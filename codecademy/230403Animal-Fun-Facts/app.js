import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = "";

const showBackground = true;
const background = (
  <img 
src="/images/ocean.jpg" 
className="background" 
alt="ocean" 
/>
);

const images = [];

for (const animal in animals){
  images.push(
    <img 
    key= {animal}
    className= "animal"
    alt= {animal}
    src= {animals[animal].image}
    aria-label= {animal}
    role= "button"
    onClick={displayFact}
    />
  );
}

const animalFacts = (
  <div>
 {/* <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1> */}
    <h1>{title || "Click an animal for a fun fact"}</h1>
    {showBackground && background}
  <p id="fact"></p>
    <div className="animals">
    {images}
    </div>
  </div>
  );

function displayFact(e){
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);

  const funFact = animalInfo.facts[optionIndex];
  const factElement = document.getElementById("fact");
  factElement.innerHTML = funFact;
}


ReactDOM.render(animalFacts, document.getElementById("root"));