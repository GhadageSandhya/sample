import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonsLists from "./Components/PokemonsLists";
import PokemonAllDetails from "./Components/PokemonAllDetails";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<PokemonsLists/>}></Route>
          <Route path='/pokemondetails' element={<PokemonAllDetails/>}></Route>
          <Route path='/pokemondetails/:name' element={<PokemonAllDetails/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
