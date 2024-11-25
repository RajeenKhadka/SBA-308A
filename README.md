# SBA-308A

Overview
The Dog Explorer website is a simple application that allows users to explore various dog breeds by fetching breed data from the Dog API and displaying images of the selected breed. It offers a clean interface where users can choose a breed from a dropdown menu and view images associated with that breed.

api.js
This file contains all the functions responsible for fetching data from the Dog API. It handles the retrieval of dog breeds and dog images based on the selected breed.

userinterface.js
This file manages the user-facing functionality. It handles the display of data on the website, including populating the breed dropdown, showing a loading spinner, and rendering dog images in the gallery.

index.js
The main JavaScript file that coordinates the application. It fetches dog breeds, populates the dropdown with breed options, and updates the gallery with dog images. It connects the functions from api.js and userinterface.js to update the UI based on user interaction.
