let results = [];
let items,
  coordinates,
  address,
  id,
  email,
  street = {};

function users(items) {
  for (let count = 0; count < items.length; count++) {
    item = new Name(items[count].name);
    coordinates = new Coordinates(items[count].location.coordinates);
    address = new Address(items[count].location);
    email = new Email(items[count].email);
    street = new Street(items[count].location);
    id = new Id(items[count].id);
  }
  console.table(item);
  console.table(coordinates);
  console.table(address.street);
  address.showAddress();
  console.table(id);
  console.table(email);
  console.table(street);
  console.table(address);
}

function createGetRequest(url, callBack) {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response);
      callBack(response);
    }
  };

  request.open("GET", url, true);

  request.send();
}

function randomUser(json) {
  results = json.results.slice();
  users(results);
}

var url = "https://randomuser.me/api/?results=1";
createGetRequest(url, randomUser);
