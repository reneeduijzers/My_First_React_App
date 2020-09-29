import React from "react";
import "./style/global.scss";

import Title from "./components/Title";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";
import Pokemon from "./components/Pokemon/Pokemon";
import AwesomeAnimals from "./components/AwesomeAnimals";
import ArticleList from "./components/ArticleList";

// DYNAMIC WAY:

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
  {
    name: "Mega Remy",
    weight: 87,
    awesome: true,
    terrifying: true,
    abilities: ["Invisible", "Fly", "Sexy", "Super Sixpack(in progress)"],
  },
];

function App() {
  return (
    <main className="container my-5">
      <Title content="My Pokemon App" />
      <LikeCounter />
      <LikeButton />
      <AwesomeAnimals />
      <ArticleList />
      <div className="row mb-4">
        {all_pokemon.map((pokemon) => (
          <div className="col-md-6 col-lg-4">
            <Pokemon
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              terrifying={pokemon.terrifying}
              abilities={pokemon.abilities}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;





// STATIC WAY (SAME RESULT):

// function App() {
//   return (
//     <div className="App">
//       <main>
//         <Title content="My Pokemon App" />
//         <Pokemon
//           name="Charizard"
//           weight="90"
//           awesome="yes"
//           terrifying="no"
//           abilities={["Blaze", "Solar power", "Tough claws", "Drought"]}
//         />
//         <Pokemon
//           name="Bulbasaur"
//           weight="6.9"
//           awesome="yes"
//           terrifying="no"
//           abilities={["Overgrow", "Chlorophyll"]}
//         />
//         <Pokemon
//           name="Mewtwo"
//           weight="122"
//           awesome="yes"
//           terrifying="yes"
//           abilities={["Pressure", "Unnerve", "Steadfast", "Insomnia"]}
//         />
//         <Pokemon
//           name="Charizard"
//           weight="90"
//           awesome="no"
//           terrifying="yes"
//           abilities={["Intimidate", "Unnerve"]}
//         />
//       </main>
//     </div>
//   );
// }

// export default App;
