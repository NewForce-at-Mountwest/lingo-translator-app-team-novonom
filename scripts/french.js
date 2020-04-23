const frenchData = {
  name: "French",
  notablePeople: [
    "Vincent Van Gogh",
    "Claude Monet",
    "Gustave Eiffel",
    "John Cena",
    "Coco Chanel"
  ],
  funFacts: {
    relatedLanguages: ["Latin", "Spanish", "Italian"],
    lettersInAlphabet: 26,
    numberOfSpeakers: "about 300 million"
  },
  countriesSpoken: [
    "Belgium",
    "Benin",
    "Burkina Faso",
    "Burundi",
    "Cameroon",
    "Canada",
    "Chad",
    "the Ivory Coast",
    "the Democratic Republic of the Congo",
    "Djibouti",
    "Equatorial Guinea",
    "France",
    "Haiti",
    "Luxembourg",
    "Madagascar",
    "Mali",
    "Monaco",
    "Niger",
    "Rwanda",
    "Senegal",
    "Seychelles",
    "Switzerland",
    "Togo and Vanuatu"
  ],
  dictionary: {
    hello: "Bonjour",
    goodbye: "Au revior",
    thankYou: "Merci",
    goodEvening: "Bon soir",
    howAreYou: "Ça va?",
    whatsYourName: "Comment tu t’appelles?"
  }
};

// Note: this will print on page load. You will need to refactor this code slightly so that it only prints when you click the "French" button on the nav bar

// This line of code calls the h1 function defined in domPrinter.js and passes in the text (the name property in the above object) and a class name of "french-heading", which currently has no applied CSS so we won't see a difference

// For loop functions

// Notable people function

// console.log(frenchData.notablePeople)

// function notablePeopleLoop() {
//   for (let i = 0; i < frenchData.notablePeople.length; i++) {
//     let notablePerson = frenchData.notablePeople[i];

//   }
// }

// French click event
document.querySelector("#french").addEventListener("click", function(){
  // Printing the contents
  document.querySelector("#language-container").innerHTML = languageContentsContainer(frenchData.name, "French", printCountriesSpoken(frenchData), notablePeopleContainer(frenchData), funFactsData(frenchData))

})

document.querySelector(".navbar-brand").addEventListener("click", function(){
  document.querySelector("#language-container").classList.remove("container")
  document.querySelector("#language-container").innerHTML = splashpageContainer()
})

