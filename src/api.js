const apiKey =
  "live_W4gHyS4jb0RK6Ybt3OJKZ9NWZqYNx9NnksI4O7hxcPN4S8fDgYjSHbOVLJkV3yAD";

// Fetch all dog breeds
export async function fetchBreeds() {
  const response = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: { "x-api-key": apiKey },
  });
  return response.json();
}

// Fetch dog images (with pagination)
export async function fetchDogs(breedId = "", limit = 5, page = 1) {
  let url = `https://api.thedogapi.com/v1/images/search?limit=${limit}&page=${page}`;
  if (breedId) {
    url += `&breed_ids=${breedId}`;
  }
  const response = await fetch(url, {
    headers: { "x-api-key": apiKey },
  });
  return response.json();
}
