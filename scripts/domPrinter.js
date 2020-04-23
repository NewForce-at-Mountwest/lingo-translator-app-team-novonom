
function splashpageContainer(){
    return `
    <div class="card" style="width: 32rem">
    <div class="card-body" style="width: 30rem">
    <form class="p-4">
        <div class="form-group">
            <label for="exampleDropdownFormEmail2">Email address</label>
            <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
        </div>
        <div class="form-group">
            <label for="exampleDropdownFormPassword2">Password</label>
            <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
        </div>
        <div class="form-group">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                <label class="form-check-label" for="dropdownCheck2">
                Remember me
                </label>
            </div>
        </div>
        <button type="submit" class="btn btn-primary submit-btn">Sign in</button>
    </form>
    </div>
  </div>
    `
}

// Notable People loop
function notablePeopleContainer(language){
    let notablePeoplehtmlString = `
    <ul>`
    
    // Notable people loop
    for (let i = 0; i < language.notablePeople.length; i++) {
        notablePeoplehtmlString += `<li>${language.notablePeople[i]}</li>`;
      }
      notablePeoplehtmlString += `</ul>`;

    return notablePeoplehtmlString
}

// Countries Spoken loop
function printCountriesSpoken (language){

    let countriesSpokenContainer = `
    <ul>`
    
    for (let i=0; i < language.countriesSpoken.length; i++){
    //   const countriesSpoken = spanishData.countriesSpoken[i]
      countriesSpokenContainer += `<li>${language.countriesSpoken[i]}</li>`
    }
    countriesSpokenContainer += `</ul>`
    return countriesSpokenContainer
    }

// Fun Facts loop
function funFactsData(languageObject){
    let funFactString = `
    <div>
    <h4>Related Languages</h4><ul>`



    for(i = 0; i < languageObject.funFacts.relatedLanguages.length; i++){
    funFactString += `<li>${languageObject.funFacts.relatedLanguages[i]}</li>`
    }

    funFactString += `</ul><h4>Letters in the Alphabet</h4>
    <p>${languageObject.funFacts.lettersInAlphabet}</p>
    <h4>Number of Speakers</h4>
    <p>${languageObject.funFacts.numberOfSpeakers}</p>
    </div>`

    return funFactString
}
    

const languageContentsContainer = (classNames, text, countriesSpoken, notablePeople, funFacts) => {
    return `
    <div class="jumbotron d-flex justify-content-center h-25 d-inline-block">
        <h1 class="${classNames}" >${text}</h1>
    </div>

    <div class="accordion" id="accordionExample">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h2 class="mb-0">
          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Countries Spoken
          </button>
        </h2>
      </div>
  
      <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body">
        ${countriesSpoken}
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingTwo">
        <h2 class="mb-0">
          <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Notable People
          </button>
        </h2>
      </div>
      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
        <div class="card-body">
        ${notablePeople}        
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingThree">
        <h2 class="mb-0">
          <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Fun Facts
          </button>
        </h2>
      </div>
      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
        <div class="card-body">
        ${funFacts}        
        </div>
      </div>
    </div>
  </div>
  <div class="row">
  </div>`
}
// -------------------- For reference! -----------------//

// Here are some other ways to right the exact same function we wrote above:

// function h1(text, classNames){
//     return `<h1 class="${classNames}">${text}</h1>`
// }

// const h1 = function(text, classNames){
//     return `<h1 class="${classNames}">${text}</h1>`
// }

// const h1 = (text, classNames) => `<h1 class="${classNames}">${text}</h1>`