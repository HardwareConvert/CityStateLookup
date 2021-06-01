"use strict";

let cityStates = [{
  state: "California",
  stateAbbr: "CA",
  cities: ["Los Angeles", "San Francisco", "San Diego"]
},
{
  state: "Colorado",
  stateAbbr: "CO",
  cities: ["Aspen", "Boulder", "Denver", "Pagosa Springs"]
},
{
  state: "Texas",
  stateAbbr: "TX",
  cities: ["Austin", "Dallas", "Houston", "San Antonio"]
},
{
  state: "Ohio",
  stateAbbr: "OH",
  cities: ["Cleveland", "Cincinnati", "Columbus", "Toledo","Dayton"]
},
{
  state: "Indiana",
  stateAbbr: "IN",
  cities: ["Indianapolis", "South Bend", "Evansville", "Nashville"]
}
];

window.onload = function(){
  // load states drop down
  loadStatesDropdown();

  const statesDropdown = document.getElementById("statesDropdown");
  statesDropdown.onchange = onStateDropdownChanged;

  const citiesDropdown = document.getElementById("citiesDropdown");
  citiesDropdown.onchange = onCitiesDropdownChanged;
}

function loadStatesDropdown(){
  const statesDropdown = document.getElementById("statesDropdown");
  let selectOneOption = document.createElement("option");
  selectOneOption.textContent = "Select one...";
  selectOneOption.value = "";
  statesDropdown.appendChild(selectOneOption);

  for (let i = 0; i < cityStates.length; i++){
    let theOption = document.createElement("option");
    theOption.textContent = cityStates[i].state;
    theOption.value = cityStates[i].stateAbbr;
    statesDropdown.appendChild(theOption);
  }

  const citiesDropdown = document.getElementById("citiesDropdown");
  selectOneOption = document.createElement("option");
  selectOneOption.textContent = "Select State first...";
  selectOneOption.value = "";
  citiesDropdown.appendChild(selectOneOption);
}

function onStateDropdownChanged(){
  //find the state and city dropdowns

  const statesDropdown =document.getElementById("statesDropdown");
  const citiesDropdown = document.getElementById("citiesDropdown");

  const messagePara = document.getElementById("messagePara");
  messagePara.innerHTML = "";

  citiesDropdown.options.length = 0;

  let selectedStateAbbr = statesDropdown.value;

  if (selectedStateAbbr == ""){
    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select State first...";
    selectOneOption.value = "";
    citiesDropdown.appendChild(selectOneOption);

    return;
  }

  let relatedState = cityStates.find(arrayElement => arrayElement.stateAbbr == selectedStateAbbr);

  let selectOneOption = document.createElement("option"); // creates <option> element
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    citiesDropdown.appendChild(selectOneOption);

    for (let i = 0; i < relatedState.cities.length; i++){
      let theOption = document.createElement("option");

      theOption.textContent = relatedState.cities[i];
      citiesDropdown.appendChild(theOption);
    }
}

function onCitiesDropdownChanged(){
  const statesDropdown = document.getElementById("statesDropdown");
  const citiesDropdown = document.getElementById("citiesDropdown");

  const messagePara = document.getElementById("messagePara");
  messagePara.innerHTML = "";

  let selectedCity = citiesDropdown.value;

  if (selectedCity == ""){
    return;
  }

  let selectedStateGroup = statesDropdown.selectedIndex;
  let selectedState = statesDropdown.options[selectedStateGroup].text;

  let message = "City: " + selectedCity + "<br>" + 
          "State: " + selectedState;
  messagePara.innerHTML = message;
}