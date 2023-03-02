const zipCode = prompt("Enter your zip code: ");

if (zipCode.length !== 5) {
  console.log("Error: Zip code must be 5 digits long.");
} else if (!(/^\d+$/.test(zipCode))) {
  console.log("Error: Zip code must only contain numbers.");
} else {
  console.log("Success");
}
