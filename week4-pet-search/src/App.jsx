// Ethan Sharp - Week 4 Assignment - Pet Search - November 20, 2026

import { useState } from "react";
import pets from "./data";
import PetSearch from "./PetSearch";
import "./App.css";

// Stores the search text and filters pets by animal type.
function App() {
  const [search, setSearch] = useState("");

  // Compare lowercase text so the search ignores capitalization.
  const filteredPets = pets.filter((pet) =>
    pet.animal.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="container py-4">
      <h1>Pet Search</h1>
      <p>Meet our favorite pets!</p>

      <PetSearch pets={filteredPets} search={search} setSearch={setSearch} />
    </main>
  );
}

export default App;
