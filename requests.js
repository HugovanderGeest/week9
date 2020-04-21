function cityOfChicago(json) {
  console.log(json);
}

function covid19(json) {
  console.log(json);
}

var url = "https://data.cityofchicago.org/resource/f7f2-ggz5.json?";
createGetRequest(url, cityOfChicago);

url = "https://covid-19api.com/api/all-today";
createGetRequest(url, covid19);
