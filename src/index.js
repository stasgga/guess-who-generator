import React from "react";
import { render } from "react-dom";

const cards = [
  "George",
  "Jerry",
  "Kramer",
  "Elaine",
  "Morty Seinfeld",
  "Soup Nazi",
  "Babu Bhatt",
  "Jean Paul",
  "Jackie Chiles",
  "Lloyd Braun",
  "Nina West",
  "Poppie",
  "Mr Kruger",
  "Susan Ross",
  "Tony",
  "Mendelbaum",
  "Tim Whatley",
  "The Wiz",
  "Newman",
  "David Puddy",
  "Mr Ross",
  "Mrs Ross",
  "Helen Seinfeld",
  "Uncle Leo",
  "Estelle",
  "Frank",
  "Ruthie Cohen"
];

const Card = ({ name }) => (
  <div
    className="card"
    style={{
      backgroundImage: `url(http://localhost:5000/img/${name
        .replace(" ", "-")
        .toLowerCase()}.jpg)`
    }}
  >
    {/* <div
      className="img"
      style={{
        backgroundImage: `url(http://localhost:5000/img/${name
          .replace(" ", "-")
          .toLowerCase()}.jpg)`
      }}
    /> */}
    <span>{name}</span>
  </div>
);

const App = () => (
  <div>
    {cards.map(card => (
      <Card key={card} name={card} />
    ))}
  </div>
);

render(<App />, document.getElementById("main"));
