function cityOfChicago(json) {
  console.log(json);
}

function covid19(json) {
  console.log(json);
  let covidconfirmed = json.confirmed;
  document.getElementById("covid").innerHTML = covidconfirmed;

  let coviddate = json.date;
  document.getElementById("covid1").innerHTML = coviddate;

  let coviddeaths = json.deaths;
  document.getElementById("covid2").innerHTML = coviddeaths;

  let covidrecovered = json.recovered;
  document.getElementById("covid3").innerHTML = covidrecovered;
}
var url = "https://data.cityofchicago.org/resource/f7f2-ggz5.json?";
createGetRequest(url, cityOfChicago);

var url = "https://covid-19api.com/api/all-today";
createGetRequest(url, covid19);
