// Ethan Sharp - Week 3 Assignment - React Component - November 14, 2026

import Image from "./Image";
import alan from "./assets/alan.webp";
import charlie from "./assets/charlie.webp";
import glep from "./assets/glep.webp";
import pim from "./assets/pim.webp";
import "./App.css";

// Displays the main content and four uses of the Image component.
function App() {
  return (
    <main>
      <h1>Smiling Friends</h1>
      <p>Meet the Smiling Friends!</p>

      <Image src={charlie} width={200} alt="Charlie" />
      <Image src={pim} width={200} alt="Pim" />
      <Image src={alan} width={200} alt="Alan" />
      <Image src={glep} width={200} alt="Glep" />
    </main>
  );
}

export default App;
