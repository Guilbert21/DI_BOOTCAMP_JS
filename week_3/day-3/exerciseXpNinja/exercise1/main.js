const olderPersonYear = prompt("Enter the year of birth of the older person (YYYY): ");
const youngerPersonYear = prompt("Enter the year of birth of the younger person (YYYY): ");

const ageDifference = olderPersonYear - youngerPersonYear;

if (ageDifference <= 0) {
  console.log("Error: The older person cannot be younger than the younger person.");
} else {
  const evenAgeDifference = ageDifference + (ageDifference % 2);
  const yearsUntilHalf = evenAgeDifference / 2;
  const youngerPersonHalfAgeYear = Number(youngerPersonYear) + yearsUntilHalf;

  console.log(`The younger person will be half the age of the older on ${youngerPersonHalfAgeYear}`);
}

