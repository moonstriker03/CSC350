// Ethan Sharp - Week 4 Assignment - Pet Search - November 20, 2026

import apollo from "./assets/apollo.jpg";
import emily from "./assets/emily.jpg";
import snoot from "./assets/snoot.webp";
import thyme from "./assets/thyme.jpg";

// Each object stores the information and image for one pet.
const pets = [
  {
    id: 1,
    name: "Apollo",
    animal: "Cat",
    specialty: "Wet treats",
    image: apollo,
  },
  {
    id: 2,
    name: "Emily",
    animal: "Cat",
    specialty: "Wet treats",
    image: emily,
  },
  {
    id: 3,
    name: "Thyme",
    animal: "Cat",
    specialty: "Dry treats",
    image: thyme,
  },
  {
    id: 4,
    name: "Snoot",
    animal: "Dog",
    specialty: "Dry treats",
    image: snoot,
  },
];

export default pets;
