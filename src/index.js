import { fetchBreeds, fetchDogs } from "./api.js";
import { populateBreeds, displayDogs, showLoading } from "./userinterface.js";

const breedSelect = document.getElementById("breed");
const gallery = document.getElementById("gallery");

const limit = 12;

// Initialize the app
async function initializeApp() {
  const breeds = await fetchBreeds();
  populateBreeds(breeds, breedSelect);
  await updateGallery();
}

// Fetch and update the gallery with dogs
async function updateGallery() {
  const breedId = breedSelect.value;
  showLoading(gallery);
  const dogs = await fetchDogs(breedId, limit, 1);
  displayDogs(dogs, gallery);
}

// Event listener for breed selection
breedSelect.addEventListener("change", () => {
  updateGallery(); // Fetch and display dogs for the selected breed
});

// Initialize the app
initializeApp();
