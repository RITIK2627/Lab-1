// VARIABLE DECLARATIONS

// STEP 1: Declare and initialize variables
var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

// STEP 3: Create the variable that contains the story string that will be modified
var storyText =
  "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// STEP 4: Create three arrays, insertX, insertY, and insertZ, assigning them the following array values respectively:
var insertX = ["Donald Trump", "Jackie Chan", "Santa Claus"];
var insertY = ["Area 51", "Death Valley", "Aruba"];
var insertZ = ["spontaneously combusted", "rapidly sublimated", "evaporated instantly"];

// FUNCTIONS

// STEP 2: Define a function to return a random value from an array
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// STEP 6: Define the result() function
function result() {
  // STEP 7: Create a new variable called newStory and set it to the value of storyText
  var newStory = storyText;

  // STEP 8: Generate random values for xItem, yItem, and zItem using the randomValueFromArray() function
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  // STEP 9: Replace placeholders in newStory with the generated values
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  // STEP 10: If a custom name is entered, replace 'Bob' in the story with the custom name
  if (customName.value !== "") {
    newStory = newStory.replace(/Bob/g, customName.value);
  }

  // STEP 11: If the metric radio button is checked, perform temperature and weight conversions
  if (document.getElementById("metric").checked) {
    var weight = Math.round(300 * 0.453592); // Convert pounds to kilograms
    newStory = newStory.replace("300 pounds", weight + " kilograms");

    var temp = Math.round(((94 - 32) * 5) / 9); // Convert Fahrenheit to Celsius
    newStory = newStory.replace("94 farenheit", temp + " Celsius");
  }

  // STEP 13: Update the paragraph with the newStory and make it visible
  story.textContent = newStory;
  story.style.visibility = "visible";
}

// EVENT LISTENERS
// STEP 5: Add a click event listener to the randomize button to run the result() function when clicked
randomize.addEventListener("click", result);
