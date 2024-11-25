// Populate the breed dropdown with breed names
export function populateBreeds(breeds, breedSelect) {
  breedSelect.innerHTML = `<option value="">All Breeds</option>`;
  breeds.forEach((breed) => {
    const option = document.createElement("option");
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}

// Display dog images in the gallery
export function displayDogs(dogs, gallery) {
  gallery.innerHTML = ""; // Clear previous images
  if (dogs.length === 0) {
    gallery.innerHTML = "<p>No dogs found.</p>";
    return;
  }
  dogs.forEach((dog) => displayDog(dog, gallery));
}

export function displayDog(dog, gallery) {
  const img = document.createElement("img");
  img.src = dog.url;
  img.alt = "Dog image";
  img.className = "dog-image";

  gallery.appendChild(img);
}

// Show a loading spinner
export function showLoading(gallery) {
  gallery.innerHTML = "<div class='loader'>Loading...</div>";
}
