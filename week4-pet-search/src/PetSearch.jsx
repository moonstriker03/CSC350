// Ethan Sharp - Week 4 Assignment - Pet Search - November 20, 2026

// Displays the search box and the matching pets passed in by App.
function PetSearch({ pets, search, setSearch }) {
  return (
    <>
      <label htmlFor="animal-search" className="form-label">
        Search by animal type:
      </label>

      <input
        id="animal-search"
        className="form-control mb-4"
        type="text"
        placeholder="Try cat or dog"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {pets.length === 0 ? (
        <p>No pets found.</p>
      ) : (
        <ul className="row list-unstyled">
          {pets.map((pet) => (
            <li className="col-12 col-sm-6 col-lg-3 mb-4" key={pet.id}>
              <img
                className="pet-image"
                src={pet.image}
                alt={pet.name}
                width="150"
              />
              <h2>{pet.name}</h2>
              <p>Animal: {pet.animal}</p>
              <p>Favorite treats: {pet.specialty}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default PetSearch;
