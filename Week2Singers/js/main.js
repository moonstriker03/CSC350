// Ethan Sharp - Week 2 Assignment - JSON and Bootstrap - November 7, 2026

// Builds the singer table when the page loads.
function displaySingers() {
  // Store singer information as JSON text.
  const singersJSON = `[
    {
      "singer": "Chris Cornell",
      "band": "Audioslave",
      "song": "Shadow on the Sun",
      "hometown": "Seattle, Washington"
    },
    {
      "singer": "Matt Bellamy",
      "band": "Muse",
      "song": "Map of the Problematique",
      "hometown": "Teignmouth, Devon"
    },
    {
      "singer": "Thom Yorke",
      "band": "Radiohead",
      "song": "Where I End and You Begin",
      "hometown": "Abingdon, Oxfordshire"
    },
    {
      "singer": "Brandon Boyd",
      "band": "Incubus",
      "song": "Sick Sad Little World",
      "hometown": "Calabasas, California"
    }
  ]`;

  // Convert the JSON text into a JavaScript array.
  const singers = JSON.parse(singersJSON);

  // Find the table body where singer rows will be added.
  const singersList = document.getElementById("singersList");

  // Create and add a table row for each singer.
  singers.forEach((singer) => {
    const row = document.createElement("tr");

    // Fill the row with the singer's information.
    row.innerHTML = `
      <td>${singer.singer}</td>
      <td>${singer.band}</td>
      <td>${singer.song}</td>
      <td>${singer.hometown}</td>
    `;

    singersList.appendChild(row);
  });
}

// Run the function to populate the table.
displaySingers();
